// src/components/Educations.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";

interface Education {
    title: string;
    location: string;
    duration: string;
    fields: string[];
}

interface EducationsProps {
    educations: Education[];
}

const EducationsContainer = styled.div`

  margin: 1rem;
`;

const EducationsTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;

`;

const EducationItem = styled.div`
  margin-bottom: 1rem;
`;

const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const EducationTitle = styled.span`
  color: var(--web-mode-tertiary-text-color);
`;

const EducationDuration = styled.span`
  font-size: .9rem;
  color: var(--web-mode-tertiary-text-color);
`;

const EducationLocation = styled.div`
  font-size: .9rem;
  
`;

const EducationFields = styled.div`
  margin-top: .2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: .1rem .5rem ;
`;

const EducationField = styled.div`
  font-size: .8rem;
  &:not(:last-child)::after {
    content: ",";
  }
`;

const Educations: React.FC<EducationsProps> = ({ educations }) => {
    return (
        <EducationsContainer>
            <EducationsTitle>Educations <FontAwesomeIcon icon={faUserGraduate} /></EducationsTitle>
            {educations.map((education, index) => (
                <EducationItem key={index}>
                    <EducationHeader>
                        <EducationTitle>{education.title}</EducationTitle>
                        <EducationDuration>{education.duration}</EducationDuration>
                    </EducationHeader>
                    <EducationLocation>{education.location}</EducationLocation>
                    <EducationFields>
                        {education.fields.map((field, fieldIndex) => (
                            <EducationField key={fieldIndex}>{field}</EducationField>
                        ))}
                    </EducationFields>
                </EducationItem>
            ))}
        </EducationsContainer>
    );
};

export default Educations;
