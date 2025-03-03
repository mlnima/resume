
import React from 'react';
import styled from 'styled-components';
import languages from '../asset/data/languages.json'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
import {SectionTitle} from "./general/CommonStyledComponents";

interface LanguagesProps {
    activeLang: activeLangTypes,
}

const LanguagesContainer = styled.div`
    grid-area: languages;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: .1rem 1rem 1rem 1rem;
    box-sizing: border-box;
    background-color: #2C2C2C;
    color: #fff;
    place-content: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: .1rem;
 
`;



const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  width: 100%;

`;

const LanguageName = styled.span``;

const LanguageLevel = styled.span``;

const Languages: React.FC<LanguagesProps> = ({ activeLang }) => {
    return (
        <LanguagesContainer>
            <SectionTitle>{dictionary?.Languages?.[activeLang]}</SectionTitle>
            {languages.map((language, index) => (
                <LanguageItem key={index}>
                 {/*//@ts-ignore*/}
                    <LanguageName>{dictionary?.[language.languageName]?.[activeLang]}</LanguageName>
                    <LanguageLevel>
                        {/*//@ts-ignore*/}
                        {dictionary?.[language.level]?.[activeLang] || language.level }
                        {/*{language.level}*/}
                    </LanguageLevel>
                </LanguageItem>
            ))}
        </LanguagesContainer>
    );
};

export default Languages;
