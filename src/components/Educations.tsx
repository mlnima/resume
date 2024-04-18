import React from 'react';
import styled from 'styled-components';
import educations from '../asset/data/educations.json';
import dictionary from '../asset/data/dictionary.json';
import {SectionSubTitle, SectionTitle} from "./general/CommonStyledComponents";
import {activeLangTypes} from "../tsTypes";

interface EducationsProps {
    activeLang: activeLangTypes
}

const Style = styled.div`
 .educationItem{
   margin: .5rem 0;
 }
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
    font-weight: bold;
`;

const EducationFields = styled.div`
  margin-top: .2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  //gap: .1rem .25rem ;
`;

const EducationField = styled.div`

  

`;

const Educations: React.FC<EducationsProps> = ({ activeLang }) => {
    return (
        <Style>
            <SectionTitle>{dictionary.educations[activeLang]} </SectionTitle>
            {educations.map((education, index) => (
                <div className={'educationItem'} key={education.title[activeLang]}>
                    <EducationHeader>
                        <SectionSubTitle>{education.title[activeLang]}</SectionSubTitle>
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
