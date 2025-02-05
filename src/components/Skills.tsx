import React from 'react';
import styled from 'styled-components';
import technologies from '../asset/data/technologies.json'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
import {SectionSubTitle, SectionTitle, SubSectionWrapper} from "./general/CommonStyledComponents";

interface TechnologiesProps {
    activeLang: activeLangTypes
}

const TechnologiesContainer = styled.div`grid-area: skills;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: .1rem;
    background-color: #2C2C2C;
    padding: .1rem 2rem;
    box-sizing: border-box;
    color: #fff;

`;


const TechnologyItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .4rem;
    padding: .25rem 0 .5rem 0;

`;


const TechnologyName = styled.span`
    border-bottom: 1px solid var(--web-mode-secondary-text-color);
    font-weight: bold;
`;

const Skills: React.FC<TechnologiesProps> = ({activeLang}) => {
    return (
        <TechnologiesContainer>
            <SectionTitle>
                {dictionary["Skills"][activeLang]}
            </SectionTitle>
            <SubSectionWrapper>
                <TechnologyItems>
                    {technologies.skills.map((technology, index) => (
                        <TechnologyName key={technology + index}>
                            {technology}
                        </TechnologyName>
                    ))}
                </TechnologyItems>
            </SubSectionWrapper>

            {/*<SubSectionWrapper>*/}
            {/*    <SectionSubTitle>*/}
            {/*        {dictionary["OTHER TECHNOLOGIES"][activeLang]}:*/}
            {/*    </SectionSubTitle>*/}
            {/*    <TechnologyItems>*/}
            {/*        {technologies['others'].map((technology, index) => (*/}
            {/*            <TechnologyName key={technology + index}>*/}
            {/*                {technology}*/}
            {/*            </TechnologyName>*/}
            {/*        ))}*/}
            {/*    </TechnologyItems>*/}
            {/*</SubSectionWrapper>*/}

        </TechnologiesContainer>
    );
};

export default Skills;
