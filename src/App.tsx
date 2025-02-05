import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import LanguageSelector from "./components/LanguageSelector";
import Summary from "./components/Summary";
import PrintButton from "./components/PrintButton";
import Skills from "./components/Skills";
import {activeLangTypes} from "./tsTypes";
import Info from "./components/Info";
import Languages from "./components/Languages";
import KeywordRenderer from "./components/KeywordRenderer";
import ProfileImage from "./components/ProfileImage";


const AppContainer = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-size: .85rem;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'sidebar' 'mainContent' 'keywords';
  //grid-row-gap: 1rem;
  grid-column-gap: 3rem;
  background-color: var(--web-mode-primary-background-color);

  h1, h2, h3, h4, h5, h6 {
    color: var(--web-mode-primary-text-color);
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-template-columns:  1fr 300px;
    //grid-template-areas:'header header' 'mainContent sidebar' 'mainContent sidebar' 'keywords keywords';
    grid-template-areas:'header header' 'mainContent sidebar' 'mainContent sidebar' 'keywords keywords';
    flex-direction: row;
    align-items: flex-start;
    width: var(--paper-width) !important;
    height: var(--paper-height) !important;
  }

  @media print {
    grid-template-columns: 1fr 300px ;
    grid-template-areas: 'header header' 'mainContent sidebar' 'mainContent sidebar' 'keywords keywords';
    flex-direction: row;
    width: var(--paper-width) !important;
    height: var(--paper-height) !important;
    
    body{
      background-color: var(--web-mode-primary-background-color);
    }
    
    #language-selector {
      display: none;
    }
  }
`;

const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  margin: 0;
  padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SidebarContainer = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: .5rem;
`
const MainContent = styled.main`
  grid-area: mainContent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;

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

    return (
        <AppContainer className="app-container">

            <LanguageSelector setActiveLang={setActiveLang} activeLang={activeLang}/>
            <PrintButton/>

            <HeaderContainer>
                <Info activeLang={activeLang}/>

            </HeaderContainer>

            <MainContent>
                <Summary activeLang={activeLang}/>
                <Experiences activeLang={activeLang}/>
                {/*<Activities activeLang={activeLang}/>*/}
            </MainContent>

            <SidebarContainer>

                <Skills activeLang={activeLang} />
                <Languages activeLang={activeLang}/>
                <Educations activeLang={activeLang}/>
            </SidebarContainer>
            <KeywordRenderer/>
        </AppContainer>
    );
};

export default App;
