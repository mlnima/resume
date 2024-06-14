// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {activeLangTypes} from "../tsTypes";
import {faAt, faGlobe, faLocationDot, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons"
import {Name, SectionText,InfoLink,InfoIcon} from "./general/CommonStyledComponents";
import dictionary from "../asset/data/dictionary.json";
import info from "../asset/data/info.json";

interface InfoProps {
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

const Info: React.FC<InfoProps> = ({ activeLang}) => {
    return (
        <>
            <TitleContainer>
                <Name>{info.Name}</Name>
                <SectionText>{dictionary.JobTitle[activeLang]}</SectionText>
            </TitleContainer>
            <InfoContainer>

                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faAt}/>
                    </InfoIcon>
                    {/*<InfoText>{email}</InfoText>*/}
                    <InfoLink href={`mailto:${info.email}`} target={'_blank'}>{info.email}</InfoLink>
                </InfoItem>
                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faMobileScreenButton}/>
                    </InfoIcon>
                    <InfoLink href={`tel:${info.mobile}`} target={'_blank'}>{info.mobile}</InfoLink>
                </InfoItem>
                {/*<InfoItem>*/}
                {/*    <FontAwesomeIcon icon={faGlobe} />*/}
                {/*    <InfoLink href={info.website.url}>{info.website.name}</InfoLink>*/}
                {/*</InfoItem>*/}
                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faGithubAlt}/>
                    </InfoIcon>
                    <InfoLink href={'https://github.com/mlnima'} target={'_blank'}>github.com/mlnima</InfoLink>
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
