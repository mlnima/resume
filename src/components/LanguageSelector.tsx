import React from 'react';
import styled from 'styled-components';

const LangDropdown = styled.select`
  font-size: .9rem;
  border-radius: 8px;
  padding: 0.5rem;
  position: fixed;
  top: 8px;
  right: 8px;
  height: 48px;
  border: .2px solid black ;
`;

const LangOption = styled.option`
  font-size: .9rem;
`;
interface IProps{
    setActiveLang:(value:string)=>void
    activeLang:string
}
const LanguageSelector: React.FC<IProps> = ({setActiveLang,activeLang}) => {

    const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        setActiveLang(newLang as string)
    };

    return (
        <LangDropdown id={'language-selector'} value={activeLang} onChange={handleLangChange}>
            <LangOption value="en">English</LangOption>
            <LangOption value="de">Deutsch</LangOption>
        </LangDropdown>
    );
};

export default LanguageSelector;
