// src/components/Languages.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons";
import languages from '../asset/data/languages.json'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
import {SectionTitle} from "./general/CommonStyledComponents";

interface Language {
    languageName: string;
    level: string;
}

interface LanguagesProps {
    activeLang: activeLangTypes,
    languagesTitle: string
}

const LanguagesContainer = styled.div`
  width: 100%;
  margin: 0;

`;



const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  width: 100%;

`;

const LanguageName = styled.span``;

const LanguageLevel = styled.span``;

const Languages: React.FC<LanguagesProps> = ({ languagesTitle,activeLang }) => {
    return (
        <LanguagesContainer>
            <SectionTitle>{languagesTitle}</SectionTitle>
            {languages.map((language, index) => (
                <LanguageItem key={index}>
                 {/*//@ts-ignore*/}
                    <LanguageName>{dictionary?.[language.languageName]?.[activeLang]}</LanguageName>
                    <LanguageLevel>{language.level}</LanguageLevel>
                </LanguageItem>
            ))}
        </LanguagesContainer>
    );
};

export default Languages;
