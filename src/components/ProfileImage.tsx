// src/components/ProfileImage.tsx
import React from 'react';
import styled from 'styled-components';
import ProfileImageFile from '../asset/profile.jpg'
import Header from "./Header";

const ProfileImageContainer = styled.div`
  grid-area: profileImage;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;


`;

const ProfileImg = styled.img`
  border-radius: 50%;
  margin: .5rem;
  width: 130px;
  height: 130px;
  object-fit: cover;
 
`;

interface IProps{
    name:string;
    jobTitle:string;
}
const ProfileImage: React.FC<IProps>= ({name,jobTitle}) => {
    return (
        <ProfileImageContainer>
            <ProfileImg src={ProfileImageFile} alt="Profile" />
            <Header name={name} jobTitle={jobTitle} />
        </ProfileImageContainer>
    );
};

export default ProfileImage;
