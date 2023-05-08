// src/components/ProfileImage.tsx
import React from 'react';
import styled from 'styled-components';
import ProfileImageFile from '../asset/profile.jpg'

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  margin: 1rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileImage: React.FC= () => {
    return (
        <ProfileImageContainer>
            <ProfileImg src={ProfileImageFile} alt="Profile" />
        </ProfileImageContainer>
    );
};

export default ProfileImage;
