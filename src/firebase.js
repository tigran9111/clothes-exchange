import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, put } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDUT0SkWpuTFVwJMDcPlevtsN-LxNWfVZ0",
    authDomain: "clothesexchange-ff065.firebaseapp.com",
    projectId: "clothesexchange-ff065",
    storageBucket: "clothesexchange-ff065.appspot.com",
    messagingSenderId: "874248659981",
    appId: "1:874248659981:web:746b0e57a60cab2da8e144",
    measurementId: "G-PNJR110QHS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, app, storage } ;