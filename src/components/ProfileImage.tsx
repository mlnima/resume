import React from 'react';
import styled from 'styled-components';

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
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const ProfileImage: React.FC = () => {

    return (
        <ProfileImageContainer>
            <ProfileImg src={process.env.PUBLIC_URL + "/profile2.png"} alt="Profile"/>
        </ProfileImageContainer>
    );

};

export default ProfileImage;
