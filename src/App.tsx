// src/App.tsx
import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import enData from './asset/data/en.json';
import deData from './asset/data/de.json';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Sidebar from './components/Sidebar';
import LanguageSelector from "./components/LanguageSelector";
import ProfileImage from "./components/ProfileImage";


const AppContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-areas: 'profileImage profileImage' 'sidebar mainContent';
  color: var(--web-mode-primary-text-color);
  background-color: var(--web-mode-primary-background-color);
  @media (min-width: 768px) {
    flex-direction: row;
    width: 210mm !important;
    height: 297mm !important;
  }

  @media print {
    max-width: 210mm;
    height: 297mm;
    box-shadow: none;
    flex-direction: row;
    color: var(--print-mode-primary-text-color);
    background-color: var(--print-mode-primary-background-color);
    #language-selector {
      display: none;
    }
  }
`;

const MainContent = styled.main`
  grid-area: mainContent;
  flex: 2;
  padding: .5rem;
  order: 1;
`;

const App: React.FC = () => {
    const [activeLang,setActiveLang] = useState('en')

    const activeData = useMemo(()=>{
        return activeLang === 'de' ? deData : enData
    },[activeLang])

    return (
        <AppContainer className="app-container">
            <LanguageSelector setActiveLang={setActiveLang} activeLang={activeLang}/>
            <ProfileImage     name={activeData.name} jobTitle={activeData.jobTitle} />
            <Sidebar
                languages={activeData.languages}
                technologies={activeData.technologies}
                info={activeData.info}

            />
            <MainContent>
                <Educations educations={activeData.educations} />
                <Experiences experiences={activeData.experiences} />
            </MainContent>

        </AppContainer>
    );
};

export default App;
