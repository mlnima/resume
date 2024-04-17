import React from 'react';
import styled from 'styled-components';
import dictionary from '../asset/data/dictionary.json'
import {activeLangTypes} from "../tsTypes";

interface HeaderProps {
    activeLang: activeLangTypes
}

const HeaderContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  text-align: center;
`;

const Name = styled.h1`
  font-size: 1.4rem;
  margin: 0;
`;

const JobTitle = styled.h2`
  margin: 0;
 
`;

const Header: React.FC<HeaderProps> = ({  activeLang }) => {
    return (
        <HeaderContainer>
            <Name>{dictionary.Name}</Name>
            <JobTitle>{dictionary.JobTitle[activeLang]}</JobTitle>
        </HeaderContainer>
    );
};

export default Header;
