import React from 'react';
import styled from 'styled-components';
import educations from '../asset/data/educations.json';
import dictionary from '../asset/data/dictionary.json';
import {SectionSubTitle, SectionTitle, InfoIcon, SectionText} from "./general/CommonStyledComponents";
import {activeLangTypes} from "../tsTypes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";

interface EducationsProps {
    activeLang: activeLangTypes
}

const Style = styled.div`
    grid-area: educations;
    padding: .1rem 1rem;
    box-sizing: border-box;
    

`;


const EducationDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;
const EducationItem = styled.div`
    margin: 0.1rem 0;
`;
const EducationDescription = styled.div`
  display: flex;
  justify-content: space-between;
  //font-weight: bold;
`;

const EducationDuration = styled.span`
  color: var(--web-mode-tertiary-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EducationLocation = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;




const Educations: React.FC<EducationsProps> = ({activeLang}) => {
    return (
        <Style>
            <SectionTitle>{dictionary.educations[activeLang]} </SectionTitle>
            {educations.filter(education=>education.show).map((education, index) => (

                <EducationItem key={education.title[activeLang]}>
                    <SectionSubTitle>
                        {education.title[activeLang]}
                    </SectionSubTitle>
                    <SectionText>
                        {education.place}
                    </SectionText>
                    <EducationDetail>
                        <EducationDuration>
                            <InfoIcon>
                                <FontAwesomeIcon icon={faCalendarDays}/>
                            </InfoIcon>
                            <SectionText> {education.duration}</SectionText>
                        </EducationDuration>
                        <EducationLocation>
                            <InfoIcon>
                                <FontAwesomeIcon icon={faLocationDot}/>
                            </InfoIcon>
                            <SectionText>  {education.location} </SectionText>
                        </EducationLocation>
                    </EducationDetail>
                    <EducationDescription>
                        {education.description}
                    </EducationDescription>

                    {/*<EducationFields>*/}
                    {/*    {education.fields.map((field, fieldIndex) => (*/}
                    {/*        <EducationField key={fieldIndex}> {field}</EducationField>*/}
                    {/*    ))}*/}
                    {/*</EducationFields>*/}
                </EducationItem>
            ))}
        </Style>
    );
};

export default Educations;


// {
//     "show": true,
//     "title": {
//     "en": "C Programming",
//         "de": "Programmierung"
// },
//     "place": "42Berlin",
//     "location": "Berlin",
//     "duration": "Aug.2024 - Sep.2024",
//     "fields": [
//     "C"
// ]
// },