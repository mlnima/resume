// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {activeLangTypes} from "../tsTypes";
import {faAt, faGlobe, faLocationDot, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons"
import {Name, SectionText,InfoLink,InfoIcon} from "./general/CommonStyledComponents";
import dictionary from "../asset/data/dictionary.json";

interface InfoProps {
    email: string;
    mobile: string;
    contactInformationTitle: string
    activeLang: activeLangTypes

}

const TitleContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  max-width: 45%;
  display: grid;
  grid-template-columns: 25px 200px;
  margin-bottom: 0.2rem;
`;




const InfoText = styled.a`
  color: var(--web-mode-primary-text-color);
`;

const Info: React.FC<InfoProps> = ({email, mobile, contactInformationTitle, activeLang}) => {
    return (
        <>
            <TitleContainer>
                <Name>{dictionary.Name}</Name>
                <SectionText>{dictionary.JobTitle[activeLang]}</SectionText>
            </TitleContainer>
            <InfoContainer>

                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faAt}/>
                    </InfoIcon>
                    {/*<InfoText>{email}</InfoText>*/}
                    <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
                </InfoItem>
                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faMobileScreenButton}/>
                    </InfoIcon>
                    <InfoLink href={`tel:${mobile}`}>{mobile}</InfoLink>
                </InfoItem>
                <InfoItem>
                    <FontAwesomeIcon icon={faGlobe} />
                    <InfoLink href={'https://www.02dev.com/'}>www.02dev.com</InfoLink>
                </InfoItem>
                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faGithubAlt}/>
                    </InfoIcon>
                    <InfoLink href={'https://github.com/mlnima'}>github.com/mlnima</InfoLink>
                </InfoItem>
                {/*<InfoItem>*/}
                {/*    <InfoIcon>🤗</InfoIcon>*/}
                {/*    <InfoLink href={'https://huggingface.co/mlnima'}>huggingface.co/mlnima</InfoLink>*/}
                {/*</InfoItem>*/}
                <InfoItem>
                    <InfoIcon>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    </InfoIcon>
                    <InfoText>Berlin</InfoText>
                </InfoItem>
            </InfoContainer>
        </>

    );
};

export default Info;
