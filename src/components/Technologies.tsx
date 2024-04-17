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

const TechnologyItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.15rem;
`;

const TechnologyName = styled.span``;

const Technologies: React.FC<TechnologiesProps> = ({ technicalSkillsTitle,activeLang }) => {
    console.log(`technologies=> `,technologies)
    return (
        <TechnologiesContainer>
            <SectionTitle>
                {technicalSkillsTitle}
            </SectionTitle>
            {technologies.map((technology, index) => (
                <TechnologyItem key={index}>
                    <TechnologyName>{technology}{index !== technologies.length - 1 ? ', ' : ''}</TechnologyName>
                </TechnologyItem>
            ))}
        </TechnologiesContainer>
    );
};

export default Technologies;
