// src/components/ProfileImage.tsx
import React from 'react';
import styled from 'styled-components';

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  margin: 1rem;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: auto;
`;

const ProfileImage: React.FC= () => {
    return (
        <ProfileImageContainer>
            <ProfileImg src={'/profile.jpg'} alt="Profile" />
        </ProfileImageContainer>
    );
};

export default ProfileImage;
