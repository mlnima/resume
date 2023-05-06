// src/components/Technologies.tsx
import React from 'react';
import styled from 'styled-components';

interface Technology {
    technologyName: string;
    value: number;
}

interface TechnologiesProps {
    technologies: Technology[];
}

const TechnologiesContainer = styled.div`
  margin: 1rem;
`;

const TechnologiesTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const TechnologyItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const TechnologyName = styled.span``;

const TechnologyValue = styled.span``;

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
    return (
        <TechnologiesContainer>
            <TechnologiesTitle>Technologies</TechnologiesTitle>
            {technologies.map((technology, index) => (
                <TechnologyItem key={index}>
                    <TechnologyName>{technology.technologyName}</TechnologyName>
                    <TechnologyValue>{technology.value}/10</TechnologyValue>
                </TechnologyItem>
            ))}
        </TechnologiesContainer>
    );
};

export default Technologies;
