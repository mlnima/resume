// src/components/Educations.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserGraduate} from "@fortawesome/free-solid-svg-icons";
import {SectionSubTitle, SectionTitle} from "./general/CommonStyledComponents";

interface Education {
    title: string;
    location: string;
    duration: string;
    fields: string[];
}

interface EducationsProps {
    educations: Education[];
    educationsTitle: string;
}

const Style = styled.div`
 
`;



const EducationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;



const EducationDuration = styled.span`
  color: var(--web-mode-tertiary-text-color);
`;

const EducationLocation = styled.div`

  
`;

const EducationFields = styled.div`
  margin-top: .2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: .1rem .25rem ;
`;

const EducationField = styled.div`

  &:not(:last-child)::after {
    content: ",";
  }
`;

const Educations: React.FC<EducationsProps> = ({ educations,educationsTitle }) => {
    return (
        <Style>
            <SectionTitle>{educationsTitle} </SectionTitle>
            {educations.map((education, index) => (
                <div key={education.title}>
                    <EducationHeader>
                        <SectionSubTitle>{education.title}</SectionSubTitle>
                        <EducationDuration>{education.duration}</EducationDuration>
                    </EducationHeader>
                    <EducationLocation>{education.location}</EducationLocation>
                    <EducationFields>
                        {education.fields.map((field, fieldIndex) => (
                            <EducationField key={fieldIndex}> {field}</EducationField>
                        ))}
                    </EducationFields>
                </div>
            ))}
        </Style>
    );
};

export default Educations;
