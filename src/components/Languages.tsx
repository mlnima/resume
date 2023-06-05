// src/components/Languages.tsx
import React from 'react';
import styled from 'styled-components';

interface Language {
    languageName: string;
    level: string;
}

interface LanguagesProps {
    languages: Language[];
}

const LanguagesContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const LanguagesTitle = styled.h3`
  font-size: 1.25rem;
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

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
    return (
        <LanguagesContainer>
            <LanguagesTitle>Languages</LanguagesTitle>
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
