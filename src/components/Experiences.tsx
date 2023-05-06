// src/components/Experiences.tsx
import React from 'react';
import styled from 'styled-components';

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
  margin: 1rem;
`;

const ExperiencesTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const ExperienceTitle = styled.span`
 font-size: .9rem;
`;

const ExperienceDuration = styled.span`

`;

const ExperienceLocation = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

const ExperienceDescription = styled.div`
  margin-top: 0.5rem;
`;

const Experiences: React.FC<ExperiencesProps> = ({ experiences }) => {
    return (
        <ExperiencesContainer>
            <ExperiencesTitle>Experiences</ExperiencesTitle>
            {experiences.map((experience, index) => (
                <ExperienceItem key={index}>
                    <ExperienceHeader>
                        <ExperienceTitle>{experience.title}</ExperienceTitle>
                        <ExperienceDuration>{experience.duration}</ExperienceDuration>
                    </ExperienceHeader>
                    <ExperienceLocation>{experience.location}</ExperienceLocation>
                    <ExperienceDescription>{experience.description}</ExperienceDescription>
                </ExperienceItem>
            ))}
        </ExperiencesContainer>
    );
};

export default Experiences;
