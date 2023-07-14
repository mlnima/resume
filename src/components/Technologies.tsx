// src/components/Technologies.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHammer} from "@fortawesome/free-solid-svg-icons";

interface TechnologiesProps {
    technologies: string[];
}

const TechnologiesContainer = styled.div`
  width: 100%;
  margin: .5rem;
`;

const TechnologiesTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TechnologyItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const TechnologyName = styled.span``;

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
    return (
        <TechnologiesContainer>
            <TechnologiesTitle>Technical Skills <FontAwesomeIcon icon={faHammer} /></TechnologiesTitle>
            {technologies.map((technology, index) => (
                <TechnologyItem key={index}>
                    <TechnologyName>{technology}</TechnologyName>
                </TechnologyItem>
            ))}
        </TechnologiesContainer>
    );
};

export default Technologies;
