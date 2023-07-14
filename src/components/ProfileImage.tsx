// src/components/ProfileImage.tsx
import React from 'react';
import styled from 'styled-components';
import ProfileImageFile from '../asset/profile.jpg'


const ProfileImageContainer = styled.div`
  grid-area: profileImage;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 130px;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  margin: .5rem;
  width: 130px;
  height: 130px;
  object-fit: cover;
 
`;


const ProfileImage: React.FC= () => {
    return (
        <ProfileImageContainer>
            <ProfileImg  src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" />
        </ProfileImageContainer>
    );
};

export default ProfileImage;
