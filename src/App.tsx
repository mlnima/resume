import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import enData from './asset/data/en.json';
import deData from './asset/data/de.json';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Sidebar from './components/Sidebar';
import LanguageSelector from "./components/LanguageSelector";
import Activities from "./components/Activities";
import Summary from "./components/Summary";
import PrintButton from "./components/PrintButton";
import Technologies from "./components/Technologies";
import {activeLangTypes} from "./tsTypes";

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

  h1, h2, h3, h4, h5, h6 {
    color: var(--web-mode-secondary-text-color);
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'sidebar mainContent' 'sidebar mainContent';
    flex-direction: row;
    align-items: flex-start;
    width: 210mm !important;
    height: 297mm !important;
  }

  @media print {
    grid-template-columns: 250px 1fr;
    grid-template-areas: 'sidebar mainContent' 'sidebar mainContent';
    flex-direction: row;
    width: 210mm !important;
    height: 297mm !important;
    .gap{
      display: flex;
      min-height: 174px !important;
      padding: 14px;
    }
    #language-selector {
      display: none;
    }
  }
`;

const MainContent = styled.main`
  grid-area: mainContent;
  flex: 2;
  padding: .5rem .5rem;
  order: 1;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  
  
  .gap{
    display: none;
  }

  .filler {
    display: none;
  }

  @media only screen and (min-width: 768px){
    .gap{
      display: flex;
      min-height: 174px !important;
      padding: 14px;
    }
  }

  @media print {
    display: block;  // Change the layout to block for printing
    width: 100%;
    box-sizing: border-box;
    overflow: initial;
    padding-top: 0;
    margin-top: 0;
    .filler {
      display: block;
      height: 174px;
      padding: 10px;
    }
  }
`;

const App: React.FC = () => {
    const [activeLang, setActiveLang] = useState<activeLangTypes>('en')

    const activeData = useMemo(() => {
        return activeLang === 'de' ? deData : enData
    }, [activeLang])

    return (
        <AppContainer className="app-container">

            <LanguageSelector setActiveLang={setActiveLang} activeLang={activeLang}/>

            <PrintButton/>
            <Sidebar
                activeLang={activeLang}
                info={activeData.info}
                contactInformationTitle={activeData.contactInformationTitle}
                languagesTitle={activeData.languagesTitle}
                technicalSkillsTitle={activeData.technicalSkillsTitle}
            />
            <MainContent>
                <div className="gap"/>
                <div className={'filler'}/>
                <Summary activeLang={activeLang}/>
                {/*<Technologies technologies={activeData.technologies} technicalSkillsTitle={activeData.technicalSkillsTitle}/>*/}
                <Experiences experiences={activeData.experiences} experiencesTitle={activeData.experiencesTitle}/>
                <Educations educations={activeData.educations} educationsTitle={activeData.educationsTitle}/>
                {/*<Activities activities={activeData.activities} activitiesTitle={activeData.activitiesTitle}/>*/}
            </MainContent>

        </AppContainer>
    );
};

export default App;
