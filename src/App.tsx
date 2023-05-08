// src/App.tsx
import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import enData from './asset/data/en.json';
import deData from './asset/data/de.json';
import Header from './components/Header';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Sidebar from './components/Sidebar';
import { useSearchParams } from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector";

const AppContainer = styled.div`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);

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
    #language-selector{
      display: none;
    }
  }
`;

const MainContent = styled.main`
  flex: 2;
  padding: 1rem;
  order: 1;

  //@media (min-width: 768px) {
  //  order: 0;
  //}
  //
  //@media print {
  //  order: 0;
  //}
`;

const PageBreak = styled.div`
  display: none;
`;

const App: React.FC = () => {
    const [activeLang,setActiveLang] = useState('en')
    // const [searchParams] = useSearchParams();
    // const lang = searchParams.get("lang");
    //
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
            />
            <MainContent>
                <Header name={activeData.name} jobTitle={activeData.jobTitle} />
                <Experiences experiences={activeData.experiences} />
                <PageBreak className="page-break" />
                <Educations educations={activeData.educations} />
            </MainContent>
        </AppContainer>
    );
};

export default App;
