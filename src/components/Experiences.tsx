// src/components/Experiences.tsx
import React from 'react';
import styled from 'styled-components';
import experiences from '../asset/data/experiences.json';
import dictionary from '../asset/data/dictionary.json';
import {SectionSubTitle, SectionText, SectionTitle} from "./general/CommonStyledComponents";
import {activeLangTypes} from "../tsTypes";

interface ExperiencesProps {
    activeLang: activeLangTypes
}

const ExperiencesContainer = styled.div`
  margin: 1rem 0;
`;

const ExperienceItem = styled.div`
  margin-bottom: .5rem;
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
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
`;

const Experiences: React.FC<ExperiencesProps> = ({ activeLang }) => {
    return (
        <ExperiencesContainer>
            <SectionTitle>{dictionary.experiences[activeLang]}</SectionTitle>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index}>
                    <ExperienceHeader>
                        <SectionSubTitle>{experience.companyName}</SectionSubTitle>
                        <ExperienceDuration>{experience.duration}</ExperienceDuration>
                        <ExperienceTitle>{experience.title[activeLang]}</ExperienceTitle>
                    </ExperienceHeader>
                    <div>{experience.location}</div>
                    <SectionText>{experience.description[activeLang]}</SectionText>
                </ExperienceItem>
            ))}
        </ExperiencesContainer>
    );
};

export default Experiences;
