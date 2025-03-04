// src/components/Experiences.tsx
import React from 'react';
import styled from 'styled-components';
import experiences from '../asset/data/experiences.json';
import dictionary from '../asset/data/dictionary.json';
import {InfoIcon, SectionSubTitle, SectionText, SectionTitle} from "./general/CommonStyledComponents";
import {activeLangTypes} from "../tsTypes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";

interface ExperiencesProps {
    activeLang: activeLangTypes
}

const ExperiencesContainer = styled.div`
    grid-area: experiences;
    margin: .1rem 0;
    padding: 0 1rem;
    box-sizing: border-box;
    background-color: #EFEFEF;
    width: 100%;
    height: 100%;
    place-content: center;
`;

const ExperienceItem = styled.div`
  margin-bottom: .1rem;
`;

const ExperienceHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--web-mode-tertiary-text-color);
`;

const ExperienceTitle = styled.span`

`;

const ExperienceDuration = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Experiences: React.FC<ExperiencesProps> = ({ activeLang }) => {
    return (
        <ExperiencesContainer>
            <SectionTitle>{dictionary.experiences[activeLang]}</SectionTitle>
            {experiences.filter(experience=>experience.show).map((experience, index) => (
                <ExperienceItem key={index}>
                    <ExperienceHeader>
                        <SectionSubTitle>{experience.companyName}</SectionSubTitle>
                        <ExperienceDuration>

                            <InfoIcon>
                                <FontAwesomeIcon icon={faCalendarDays}/>
                            </InfoIcon>
                            {experience.duration}
                        </ExperienceDuration>
                        <ExperienceTitle>{experience.title[activeLang]}</ExperienceTitle>
                    </ExperienceHeader>
                    <LocationContainer>
                        <InfoIcon>
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </InfoIcon>
                        {experience.location}
                    </LocationContainer>
                    <SectionText>{experience.description[activeLang]}</SectionText>
                </ExperienceItem>
            ))}
        </ExperiencesContainer>
    );
};

export default Experiences;
