import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import LanguageSelector from "./components/LanguageSelector";
import Summary from "./components/Summary";
import PrintButton from "./components/PrintButton";
import Skills from "./components/Skills";
import {activeLangTypes} from "./tsTypes";
import Contact from "./components/contact";
import Languages from "./components/Languages";
import KeywordRenderer from "./components/KeywordRenderer";
import ProfileImage from "./components/ProfileImage";
import NameTitle from "./components/NameTitle";


const AppContainer = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  font-size: .80rem;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.15);
  background-color: var(--web-mode-primary-background-color);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'profileImage' 
                      'nameTitle'
                      'summary'
                      'educations'
                      'experiences'
                      'skills'
                      'languages'
                      'contact';
  
    
  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-template-columns:  1fr 1fr;
    grid-template-areas: 'profileImage summary'
                         'profileImage educations' 
                         'profileImage educations' 
                         'nameTitle experiences' 
                         'skills experiences'
                         'skills experiences'
                         'skills experiences'
                         'skills experiences'
                         'languages contact';
    width: var(--paper-width) !important;
    height: var(--paper-height) !important;
    max-height: var(--paper-height) !important;
  }

  @media print {
    grid-template-columns: 1fr 1fr ;
    grid-template-areas: 'profileImage summary'
                         'profileImage educations' 
                         'nameTitle experiences' 
                         'skills experiences'
                        'skills experiences'
                         'skills experiences'
                         'skills experiences'
                         'languages contact';
    flex-direction: row;
    width: var(--paper-width) !important;
    height: var(--paper-height) !important;
    max-height: var(--paper-height) !important;
      
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


            <ProfileImage/>
            <Summary activeLang={activeLang}/>
            <Educations activeLang={activeLang}/>
            <NameTitle activeLang={activeLang}/>
            <Experiences activeLang={activeLang}/>
            <Skills activeLang={activeLang} />
            <Languages activeLang={activeLang}/>
            <Contact activeLang={activeLang}/>
            {/*<HeaderContainer>*/}
            {/*    <Info activeLang={activeLang}/>*/}

            {/*</HeaderContainer>*/}

            {/*<MainContent>*/}

            {/*    <Experiences activeLang={activeLang}/>*/}
            {/*    /!*<Activities activeLang={activeLang}/>*!/*/}
            {/*</MainContent>*/}

            {/*<SidebarContainer>*/}

            {/*    <Skills activeLang={activeLang} />*/}
            {/*    <Languages activeLang={activeLang}/>*/}

            {/*</SidebarContainer>*/}
            {/*<KeywordRenderer/>*/}
        </AppContainer>
    );
};

export default App;
