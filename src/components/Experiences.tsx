// src/components/Experiences.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {SectionSubTitle, SectionText, SectionTitle} from "./general/CommonStyledComponents";

interface Experience {
    title: string;
    companyName: string;
    location: string;
    duration: string;
    description: string;

}

interface ExperiencesProps {
    experiences: Experience[];
    experiencesTitle:string
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

const CompanyName = styled.span`

  font-weight: bold;
`;
const ExperienceTitle = styled.span`

`;

const ExperienceDuration = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
`;

const ExperienceLocation = styled.div`
    
`;

const ExperienceDescription = styled.div`
  margin-top: 0.1rem;
`;

const Experiences: React.FC<ExperiencesProps> = ({ experiences,experiencesTitle }) => {
    return (
        <ExperiencesContainer>
            <SectionTitle>{experiencesTitle}</SectionTitle>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index}>
                    <ExperienceHeader>
                        <SectionSubTitle>{experience.companyName}</SectionSubTitle>
                        <ExperienceDuration>{experience.duration}</ExperienceDuration>
                        <ExperienceTitle>{experience.title}</ExperienceTitle>

                    </ExperienceHeader>
                    <ExperienceLocation>{experience.location}</ExperienceLocation>
                    <SectionText>{experience.description}</SectionText>
                </ExperienceItem>
            ))}
        </ExperiencesContainer>
    );
};

export default Experiences;
