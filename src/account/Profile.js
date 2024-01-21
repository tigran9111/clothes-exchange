

import { useState, useEffect } from 'react';
import { ProfileContainer, ProfileTitle, UploadInput, UploadButton, ProfileAvatar, ProfileAvatarImg, ProfileInfo, ImagesContainer, ItemCard } from './style'
import Navigation  from '../navigation/Navigation'
import { app } from '../firebase';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


const storage = getStorage(app);


function Profile() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Fetch the list of images from Firebase Storage when the component mounts
    fetchImageList();
  }, []);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    // Upload the selected file to Firebase Storage
    const storageRef = ref(storage, `user-images/${selectedFile.name}`);

    try {
      // Upload file
      const snapshot = await uploadBytes(storageRef, selectedFile);

      // Get the download URL after the upload is complete
      const downloadURL = await getDownloadURL(snapshot.ref);
      fetchImageList();

      // Save the download URL to Firestore or handle it as needed
      console.log('File available at', downloadURL);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const fetchImageList = async () => {
    // Fetch the list of images from Firebase Storage
    const imagesRef = ref(storage, 'user-images/');
    const imageList = await listAll(imagesRef);

    // Get download URLs for each image
    const urls = await Promise.all(imageList.items.map((item) => getDownloadURL(item)));

    // Set the imageList state with the download URLs
    setImageList(urls);
  };


  return (
    <>
        <Navigation />
        <ProfileContainer>
          <ProfileInfo>
            <ProfileAvatar>
              <ProfileAvatarImg src='https://firebasestorage.googleapis.com/v0/b/clothesexchange-ff065.appspot.com/o/user-images%2F1E750E5C-95AA-4D11-85AE-8ABF0BB0DB15.jpg?alt=media&token=445bc5d4-7064-48d3-a5dd-dbaa23792cb3'/> 
             </ProfileAvatar>
            <ProfileTitle>Tigran Petrosyan</ProfileTitle>
          </ProfileInfo>
            <UploadInput>
              Choose Files
              <input style={{position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer'}} type='file' onChange={handleFileChange} />
            </UploadInput>
            <UploadButton onClick={handleUpload}>Upload Image</UploadButton>
            <ImagesContainer>

                {imageList.map((url, index) => (
                  <ItemCard>
                    <img key={index} src={url} alt={`Uploaded ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </ItemCard>
                ))}

            </ImagesContainer>
        </ProfileContainer>
    </>
  );
}

export default Profile;