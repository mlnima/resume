// src/components/Technologies.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHammer} from "@fortawesome/free-solid-svg-icons";
import technologies from '../asset/data/technologies.json'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
import {SectionTitle} from "./general/CommonStyledComponents";
interface TechnologiesProps {
    technicalSkillsTitle:string
    activeLang: activeLangTypes
}

const TechnologiesContainer = styled.div`
  width: 100%;
`;

const TechnologyItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));

`;

const TechnologyName = styled.span`

`;

const Technologies: React.FC<TechnologiesProps> = ({ technicalSkillsTitle,activeLang }) => {
    return (
        <TechnologiesContainer>
            <SectionTitle>
                {technicalSkillsTitle}
            </SectionTitle>
            <TechnologyItems>


            {technologies.map((technology, index) => (
                <TechnologyName key={technology}>
                    {technology}
                </TechnologyName>
            ))}
            </TechnologyItems>
        </TechnologiesContainer>
    );
};

export default Technologies;
