// src/App.tsx
import React from 'react';
import styled from 'styled-components';
import data from './asset/data.json';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Sidebar from './components/Sidebar';

const AppContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    max-width: 210mm;
    height: 297mm;
    flex-direction: row;
  }

  @media print {
    max-width: 210mm;
    height: 297mm;
    box-shadow: none;
    flex-direction: row;
  }
`;

const MainContent = styled.main`
  flex: 2;
  padding: 1rem;
  order: 1;

  @media (min-width: 768px) {
    order: 0;
  }

  @media print {
    order: 0;
  }
`;

const PageBreak = styled.div`
  display: none;
`;

const App: React.FC = () => {
    return (
        <AppContainer className="app-container">
            <Sidebar
                languages={data.languages}
                technologies={data.technologies}
                info={data.info}
            />
            <MainContent>
                <Header name={data.name} jobTitle={data.jobTitle} />
                <Experiences experiences={data.experiences} />
                <PageBreak className="page-break" />
                <Educations educations={data.educations} />
            </MainContent>
        </AppContainer>
    );
};

export default App;
