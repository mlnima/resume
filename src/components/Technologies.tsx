// src/components/Technologies.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHammer} from "@fortawesome/free-solid-svg-icons";
import technologies from '../asset/data/technologies.json'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
interface TechnologiesProps {
    technicalSkillsTitle:string
    activeLang: activeLangTypes
}

const TechnologiesContainer = styled.div`
  width: 100%;
  margin: .25rem;
`;

const TechnologiesTitle = styled.div`
  display: flex;
  align-items: center;


  span{
    font-size: 1rem;
  }
  h3{
    margin:1px;
  }
`;

const TechnologyItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.15rem;
  font-weight: bold;
`;

const TechnologyName = styled.span``;

const Technologies: React.FC<TechnologiesProps> = ({ technicalSkillsTitle,activeLang }) => {
    console.log(`technologies=> `,technologies)
    return (
        <TechnologiesContainer>
            <TechnologiesTitle><h3>"{technicalSkillsTitle}"</h3>  <span> :[</span></TechnologiesTitle>
            {/*[*/}
            {/*{technologies.map((tech, index) => (*/}
            {/*    <span key={index} className="technology">{tech}{index !== technologies.length - 1 ? ', ' : ''}</span>*/}
            {/*))}*/}
            {/*]*/}

            {technologies.map((technology, index) => (
                <TechnologyItem key={index}>
                    <TechnologyName>{technology}{index !== technologies.length - 1 ? ', ' : ''}</TechnologyName>
                </TechnologyItem>
            ))}
            ]
        </TechnologiesContainer>
    );
};

export default Technologies;
