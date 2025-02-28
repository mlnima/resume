import React from 'react';
import styled from 'styled-components';
import {activeLangTypes} from "../tsTypes";
import {Name, SectionTitle} from "./general/CommonStyledComponents";
import dictionary from "../asset/data/dictionary.json";
import info from "../asset/data/info.json";

interface InfoProps {
    activeLang: activeLangTypes
}

const TitleContainer = styled.div`
    grid-area: nameTitle;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #222222;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    h1{
        color: #fff;
        font-size: xxx-large;
        margin: 0;
    }

    h2 {
        color: #fff;
        border: none;
        justify-content: center;
    }

    //@media (min-width: 768px) {
    //    h1{
    //        width: 80%;
    //    }
    //}
`;

const NameTitle: React.FC<InfoProps> = ({activeLang}) => {
    return (
        <TitleContainer>
            <div className={'titleContainerNameAndTitle'}>
                <h1>{info.Name}</h1>
                <SectionTitle>{dictionary.JobTitle[activeLang]}</SectionTitle>
            </div>
        </TitleContainer>
    );
};

export default NameTitle;
