// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {activeLangTypes} from "../tsTypes";
import {faAt, faGlobe, faLocationDot, faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons"
import {Name, SectionText, InfoLink, InfoIcon} from "./general/CommonStyledComponents";
import dictionary from "../asset/data/dictionary.json";
import info from "../asset/data/info.json";
import ProfileImage from './ProfileImage'

interface InfoProps {
    activeLang: activeLangTypes
}

const TitleContainer = styled.div`
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    box-sizing: border-box;
    .titleContainerNameAndTitle{
        display: flex;
        flex-direction: column;
    }
`;

const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const InfoItem = styled.div`
    display: flex;
    align-items: center;
    max-width: 45%;
    margin-bottom: 0.2rem;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


const InfoText = styled.a`
    color: var(--web-mode-primary-text-color);
`;

const Info: React.FC<InfoProps> = ({activeLang}) => {
    return (
        <InfoWrapper>
            <TitleContainer>
                <ProfileImage/>
                <div className={'titleContainerNameAndTitle'}>
                    <Name>{info.Name}</Name>
                    <SectionText>{dictionary.JobTitle[activeLang]}</SectionText>
                </div>


            </TitleContainer>

            <InfoContainer>

                <InfoItem>
                    <InfoIcon>
                        <FontAwesomeIcon icon={faAt}/>
                    </InfoIcon>
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

        </InfoWrapper>

    );
};

export default Info;
