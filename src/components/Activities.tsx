// src/components/Info.tsx
import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faChartLine} from "@fortawesome/free-solid-svg-icons";

interface InfoProps {
    activities: {
        title: string,
        url: string,

    }[];

}

const ActivitiesContainer = styled.div`
  margin: .5rem 0;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
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


const Activities: React.FC<InfoProps> = ({activities}) => {
    return (
        <ActivitiesContainer>
            <InfoTitle>Activities <FontAwesomeIcon icon={faChartLine}/></InfoTitle>
            {activities.map((activity) => {
                return (
                    <ActivitiesItem>
                        <ActivitiesName>{activity.title}</ActivitiesName>
                        <ActivitiesUrl href={activity.url}>{activity.url}</ActivitiesUrl>
                    </ActivitiesItem>
                )
            })}
        </ActivitiesContainer>
    );
};

export default Activities;
