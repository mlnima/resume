import React from 'react';
import styled from 'styled-components';
import dictionary from '../asset/data/dictionary.json'
import {activeLangTypes} from "../tsTypes";
import {Name, SectionText, SectionTitle} from "./general/CommonStyledComponents";

interface HeaderProps {
    activeLang: activeLangTypes
}

const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
`;


const Header: React.FC<HeaderProps> = ({  activeLang }) => {
    return (
        <HeaderContainer>
            <Name>{dictionary.Name}</Name>
            <SectionText>{dictionary.JobTitle[activeLang]}</SectionText>
        </HeaderContainer>
    );
};

// export default Header;
