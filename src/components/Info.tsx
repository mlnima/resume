// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';

interface InfoProps {
    email: string;
    mobile: string;
    location: string;
}

const InfoContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const InfoIcon = styled.span`
  margin-right: 0.5rem;
`;

const InfoText = styled.span``;

const Info: React.FC<InfoProps> = ({ email, mobile, location }) => {
    return (
        <InfoContainer>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoItem>
                <InfoIcon>✉️</InfoIcon>
                <InfoText>{email}</InfoText>
            </InfoItem>
            <InfoItem>
                <InfoIcon>📱</InfoIcon>
                <InfoText>{mobile}</InfoText>
            </InfoItem>
            <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <InfoText>{location}</InfoText>
            </InfoItem>
        </InfoContainer>
    );
};

export default Info;
