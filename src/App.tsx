// src/App.tsx
import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import enData from './asset/data/en.json';
import deData from './asset/data/de.json';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Sidebar from './components/Sidebar';
import LanguageSelector from "./components/LanguageSelector";
// import ProfileImage from "./components/ProfileImage";
import Activities from "./components/Activities";


const AppContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'sidebar ' 'mainContent';
  color: var(--web-mode-primary-text-color);
  background-color: var(--web-mode-primary-background-color);
  
  h1,h2,h3,h4,h5,h6{
    color: var(--web-mode-secondary-text-color);
  }
  
  a{
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'sidebar mainContent' 'sidebar mainContent';
    flex-direction: row;
    width: 210mm !important;
    height: 297mm !important;
  }

  @media print {
    max-width: 210mm;
    height: 297mm;
    box-shadow: none;
    flex-direction: row;
    //color: var(--web-mode-primary-text-color);
    //background-color: var(--web-mode-primary-background-color);
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
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  .filler{
    display: none;
  }
  @media only screen and (min-width: 768px){
    .filler{
      display: block;
      height: 174px;
      padding: 10px;
    }
  }
`;

const App: React.FC = () => {
    const [activeLang,setActiveLang] = useState('en')

    const activeData = useMemo(()=>{
        return activeLang === 'de' ? deData : enData
    },[activeLang])

    return (
        <AppContainer className="app-container">
            <LanguageSelector setActiveLang={setActiveLang} activeLang={activeLang}/>

            <Sidebar
                languages={activeData.languages}
                technologies={activeData.technologies}
                info={activeData.info}
                name={activeData.name}
                jobTitle={activeData.jobTitle}
            />
            <MainContent>
                <div className={'filler'}/>
                <Experiences experiences={activeData.experiences} />
                <Educations educations={activeData.educations} />
                <Activities activities={activeData.activities}/>
            </MainContent>

        </AppContainer>
    );
};

export default App;
