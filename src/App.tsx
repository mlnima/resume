import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import enData from './asset/data/en.json';
import deData from './asset/data/de.json';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
// import Sidebar from './components/Sidebar';
import LanguageSelector from "./components/LanguageSelector";
import Summary from "./components/Summary";
import PrintButton from "./components/PrintButton";
import Skills from "./components/Skills";
import {activeLangTypes} from "./tsTypes";
import Info from "./components/Info";
import Languages from "./components/Languages";


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
  grid-template-areas: 'header' 'sidebar' 'mainContent';
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
    grid-template-areas:'header header' 'mainContent sidebar' 'mainContent sidebar';
    flex-direction: row;
    align-items: flex-start;
    width: 210mm !important;
    height: 297mm !important;
  }

  @media print {
    grid-template-columns: 1fr 300px ;
    grid-template-areas: 'header header' 'mainContent sidebar' 'mainContent sidebar';
    flex-direction: row;
    width: 215.9mm !important;
    height: 279.4mm !important;

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

    const activeData = useMemo(() => {
        return activeLang === 'de' ? deData : enData
    }, [activeLang])

    return (
        <AppContainer className="app-container">

            <LanguageSelector setActiveLang={setActiveLang} activeLang={activeLang}/>
            <PrintButton/>

            <HeaderContainer>
                <Info activeLang={activeLang}
                      email={activeData.info.email}
                      mobile={activeData.info.mobile}
                      contactInformationTitle={activeData.contactInformationTitle}/>
            </HeaderContainer>

            <MainContent>
                <Summary activeLang={activeLang}/>
                {/*<Skills technologies={activeData.technologies} technicalSkillsTitle={activeData.technicalSkillsTitle}/>*/}
                <Experiences activeLang={activeLang}/>

                {/*<Activities activeLang={activeLang}/>*/}
            </MainContent>

            <SidebarContainer>
                {/*<ProfileImage/>*/}
                <Skills activeLang={activeLang} />
                <Languages activeLang={activeLang} languagesTitle={activeData.languagesTitle}/>
                <Educations activeLang={activeLang}/>
            </SidebarContainer>

        </AppContainer>
    );
};

export default App;
