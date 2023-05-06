// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    name: string;
    jobTitle: string;
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const JobTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #555;
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
