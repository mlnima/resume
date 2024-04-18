// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import activities from '../asset/data/activities.json';
import dictionary from '../asset/data/dictionary.json';
import {activeLangTypes} from "../tsTypes";
import {SectionTitle,SectionText} from "./general/CommonStyledComponents";

interface InfoProps {
    activeLang: activeLangTypes
}

const ActivitiesContainer = styled.div`
  margin: .25rem 0;
  display: flex;
  flex-direction: column;
`;

const ActivitiesItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4px 0;
  box-sizing: border-box;
`;

const ActivitiesName = styled.p`
  width: 100%;
  margin: 2px 0;
  
`;
const ActivitiesUrl = styled.a`
  width: 100%;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
`;


const Activities: React.FC<InfoProps> = ({activeLang}) => {
    return (
        <ActivitiesContainer>
            <SectionTitle>{dictionary.activities[activeLang]}</SectionTitle>
            {activities.map((activity) => {
                return (
                    <ActivitiesItem>
                        <SectionText>{activity.title[activeLang]}</SectionText>
                        <ActivitiesUrl href={activity.url}>{activity.url}</ActivitiesUrl>
                    </ActivitiesItem>
                )
            })}
        </ActivitiesContainer>
    );
};

export default Activities;
