import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';
import {activeLangTypes} from "../tsTypes";

const LangDropdown = styled.select`
  border-radius: 8px;
  padding: 0.5rem;
  position: fixed;
  top: 8px;
  right: 8px;
  height: 48px;
  border: .2px solid black ;
`;

const LangOption = styled.option`

`;
interface IProps{
    setActiveLang:Dispatch<SetStateAction<activeLangTypes>>
    activeLang:activeLangTypes
}
const LanguageSelector: React.FC<IProps> = ({setActiveLang,activeLang}) => {

    const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        setActiveLang(newLang as activeLangTypes)
    };

    return (
        <LangDropdown id={'language-selector'} value={activeLang} onChange={handleLangChange}>
            <LangOption value="en">English</LangOption>
            <LangOption value="de">Deutsch</LangOption>
        </LangDropdown>
    );
};

export default LanguageSelector;
