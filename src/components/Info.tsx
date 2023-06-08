// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faAddressCard, faAt, faGlobe, faLocationDot, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";

interface InfoProps {
    email: string;
    mobile: string;
    location: string;
}

const InfoContainer = styled.div`
  width: 100%;
  margin: .5rem;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-bottom: 0.5rem;
`;

const InfoIcon = styled.span`
  margin-right: 0.5rem;
`;

const InfoText = styled.span``;

const InfoLink = styled.a`
    
`;

const Info: React.FC<InfoProps> = ({ email, mobile, location }) => {
    return (
        <InfoContainer>
            <InfoTitle>Contact Information <FontAwesomeIcon icon={faAddressCard} /></InfoTitle>
            <InfoItem>
                <InfoIcon>
                    <FontAwesomeIcon icon={faAt} />
                </InfoIcon>
                <InfoText>{email}</InfoText>
            </InfoItem>
            <InfoItem>
                <FontAwesomeIcon icon={faMobileScreenButton} />
                <InfoText>{mobile}</InfoText>
            </InfoItem>
            <InfoItem>
                <FontAwesomeIcon icon={faGlobe} />
                <InfoLink href={'https://www.02dev.com/'}>www.02dev.com</InfoLink>
            </InfoItem>
            <InfoItem>
                <FontAwesomeIcon icon={faLocationDot} />
                <InfoText>{location}</InfoText>
            </InfoItem>

        </InfoContainer>
    );
};

export default Info;
