// src/components/Experiences.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

interface Experience {
    title: string;
    companyName: string;
    location: string;
    duration: string;
    description: string;
}

interface ExperiencesProps {
    experiences: Experience[];
}

const ExperiencesContainer = styled.div`
  margin: .5rem 1rem;
`;

const ExperiencesTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
`;

const ExperienceHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--web-mode-tertiary-text-color);
`;

const CompanyName = styled.span`
 font-size: .9rem;
  font-weight: bold;
`;
const ExperienceTitle = styled.span`
 font-size:.9rem;
`;

const ExperienceDuration = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: .9rem;
  font-weight: bold;
`;

const ExperienceLocation = styled.div`
  font-size: .9rem;

`;

const ExperienceDescription = styled.div`
  margin-top: 0.1rem;
  font-size: .8rem;
`;

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
    return (
        <ExperiencesContainer>
            <ExperiencesTitle>Experiences <FontAwesomeIcon icon={faBriefcase} /></ExperiencesTitle>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index}>
                    <ExperienceHeader>
                        <CompanyName>{experience.companyName}</CompanyName>
                        <ExperienceDuration>{experience.duration}</ExperienceDuration>
                        <ExperienceTitle>{experience.title}</ExperienceTitle>

                    </ExperienceHeader>
                    <ExperienceLocation>{experience.location}</ExperienceLocation>
                    <ExperienceDescription>{experience.description}</ExperienceDescription>
                </ExperienceItem>
            ))}
        </ExperiencesContainer>
    );
};

export default Experiences;
