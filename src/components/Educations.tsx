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
    padding: .1rem 2rem;
    box-sizing: border-box;
`;


const EducationDetail = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const EducationDuration = styled.span`
  color: var(--web-mode-tertiary-text-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EducationPlace = styled.div`
  font-weight: bold;
`;

const EducationLocation = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EducationFields = styled.div`
  margin-top: .2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  //gap: .1rem .25rem ;
`;

const EducationField = styled.div`



`;

const Educations: React.FC<EducationsProps> = ({activeLang}) => {
    return (
        <Style>
            <SectionTitle>{dictionary.educations[activeLang]} </SectionTitle>
            {educations.filter(education=>education.show).map((education, index) => (

                <div className={'educationItem'} key={education.title[activeLang]}>
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

                    {/*<EducationFields>*/}
                    {/*    {education.fields.map((field, fieldIndex) => (*/}
                    {/*        <EducationField key={fieldIndex}> {field}</EducationField>*/}
                    {/*    ))}*/}
                    {/*</EducationFields>*/}
                </div>
            ))}
        </Style>
    );
};

export default Educations;
