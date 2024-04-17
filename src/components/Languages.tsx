// src/components/Languages.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons";
import languages from '../asset/data/languages.json'
import {activeLangTypes} from "../tsTypes";
import dictionary from '../asset/data/dictionary.json'
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

const LanguagesTitle = styled.h3`
  margin-bottom: 0.5rem;

`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  width: 100%;

`;

const LanguageName = styled.span``;

const LanguageLevel = styled.span``;

const Languages: React.FC<LanguagesProps> = ({ languagesTitle }) => {
    return (
        <LanguagesContainer>
            <LanguagesTitle>{languagesTitle}</LanguagesTitle>
            {languages.map((language, index) => (
                <LanguageItem key={index}>
                    <LanguageName>{language.languageName}</LanguageName>
                    <LanguageLevel>{language.level}</LanguageLevel>
                </LanguageItem>
            ))}
        </LanguagesContainer>
    );
};

export default Languages;
