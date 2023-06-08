// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    name: string;
    jobTitle: string;
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
  font-size: .9rem;
  margin: 0;
 
`;

const Header: React.FC<HeaderProps> = ({ name, jobTitle }) => {
    return (
        <HeaderContainer>
            <Name>{name}</Name>
            <JobTitle>{jobTitle}</JobTitle>
        </HeaderContainer>
    );
};

export default Header;
