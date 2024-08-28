// src/components/ProfileImage.tsx
import React, {useState} from 'react';
import styled from 'styled-components';



const ProfileImageContainer = styled.div`
  grid-area: profileImage;
  display: flex;
  justify-content: center;
  align-items: center;
  //width: 100%;
  //height: 130px;
  overflow: hidden;
`;

const ProfileImg = styled.img`

  margin: .5rem;
  width: 100px;
  height: 100px;
    border-radius: 50%;
  //height: 130px;
  object-fit: contain;

`;

const MaximizedProfileImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const MaximizedImg = styled.img`
  border-radius: 50%;
  margin: .5rem;
  max-width: 768px;
  object-fit: cover;
  
`;


const ProfileImage: React.FC = () => {
    const [isMaximized, setIsMaximized] = useState(false)


    if (isMaximized) {
        return (
            <MaximizedProfileImageContainer onClick={()=>setIsMaximized(false)}>
                <MaximizedImg src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" onClick={()=>setIsMaximized(false)}/>
            </MaximizedProfileImageContainer>
        )
    } else {
        return (
            <ProfileImageContainer>
                <ProfileImg src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" onClick={()=>setIsMaximized(true)}/>
            </ProfileImageContainer>
        );
    }

};

export default ProfileImage;
