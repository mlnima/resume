// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
import {faAddressCard, faAt, faGlobe, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons"
import {SectionTitle} from "./general/CommonStyledComponents";

interface InfoProps {
    email: string;
    mobile: string;
    contactInformationTitle:string
    activeLang: activeLangTypes

}

const InfoContainer = styled.div`
  width: 100%;
  margin: .2rem;
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  margin-bottom: 0.2rem;
`;

const InfoIcon = styled.span`
  margin-right: 0.5rem;
`;

// const InfoText = styled.span``;

const InfoLink = styled.a`
    color: black;
`;

const Info: React.FC<InfoProps> = ({ email, mobile,contactInformationTitle,activeLang }) => {
    return (
        <InfoContainer>
            <SectionTitle>{contactInformationTitle}</SectionTitle>
            <InfoItem>
                <InfoIcon>
                    <FontAwesomeIcon icon={faAt} />
                </InfoIcon>
                {/*<InfoText>{email}</InfoText>*/}
                <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
            </InfoItem>
            <InfoItem>
                <FontAwesomeIcon icon={faMobileScreenButton} />
                {/*<InfoText>{mobile}</InfoText>*/}
                <InfoLink href={`tel:${mobile}`}>{mobile}</InfoLink>
            </InfoItem>
            <InfoItem>
                <FontAwesomeIcon icon={faGlobe} />
                <InfoLink href={'https://www.02dev.com/'}>www.02dev.com</InfoLink>
            </InfoItem>
            <InfoItem>
                <FontAwesomeIcon icon={faGithubAlt} />
                <InfoLink href={'https://github.com/mlnima'}>github.com/mlnima</InfoLink>
            </InfoItem>
            <InfoItem>
                <span>🤗</span>
                <InfoLink href={'https://huggingface.co/mlnima'}>huggingface.co/mlnima</InfoLink>
            </InfoItem>
            {/*<InfoItem>*/}
            {/*    <FontAwesomeIcon icon={faLocationDot} />*/}
            {/*    <InfoText>{location}</InfoText>*/}
            {/*</InfoItem>*/}
        </InfoContainer>
    );
};

export default Info;
