
import styled from 'styled-components';

export const ProfileContainer = styled.div`
    height: 100%;
    padding: 60px;

`;

export const ProfileInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   margin: 24px 0;
`;

export const ProfileTitle = styled.h3`
    font-size: 24px;
`;

export const ProfileAvatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    background-color: red;
`

export const ProfileAvatarImg =styled.img`
    width: 100%;
`

export const UploadInput = styled.button`
    height: 32px;
    position: relative;
    padding: 0 16px;
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background: #ff445c;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    margin-top: 24px;
    text-align: center;
    cursor: pointer;
    margin: 0 8px 0 0;
`

export const UploadButton = styled.button`
    height: 32px;
    border-radius: 20px;
    padding: 0 16px;
    border: 1px solid #ff4b2b;
    background: #ff445c;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    text-align: center;
    cursor: pointer;
`

export const ImagesContainer = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    grid-template-rows: 400px;
    gap: 12px;
`

export const ItemCard =styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    background-color: rgb(146 151 179 / 13%);
    border-radius: 14px;
    border: 1px solid rgba(16 18 27 / 40%);
    padding: 20px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
        transform: scale(1.02);
        background-color: rgba(16 18 27 / 40%);
        
    }
`