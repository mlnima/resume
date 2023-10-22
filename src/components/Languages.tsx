// src/components/Languages.tsx
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthEurope} from "@fortawesome/free-solid-svg-icons";

interface Language {
    languageName: string;
    level: string;

}

interface LanguagesProps {
    languages: Language[];
    languagesTitle: string;
}

const LanguagesContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const LanguagesTitle = styled.h3`
  font-size: 1.2rem;
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

const Languages: React.FC<LanguagesProps> = ({ languages,languagesTitle }) => {
    return (
        <LanguagesContainer>
            <LanguagesTitle>{languagesTitle} <FontAwesomeIcon icon={faEarthEurope} /></LanguagesTitle>
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
