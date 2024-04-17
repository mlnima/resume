// src/components/Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import Languages from './Languages';
import Technologies from './Technologies';
import Info from './Info';
import ProfileImage from "./ProfileImage";
import Header from "./Header";
import {activeLangTypes} from "../tsTypes";


interface SidebarProps {

    info: {
        email: string;
        mobile: string;
    };
    contactInformationTitle:string,
    languagesTitle:string,
    technicalSkillsTitle:string,
    activeLang: activeLangTypes
}

const SidebarContainer = styled.aside`
 
  grid-area: sidebar;
  flex: 1;
  background-color: var(--web-mode-tertiary-background-color);
  padding:  .5rem ;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 0;
`;


const Sidebar: React.FC<SidebarProps> =
    ({
         info,
         contactInformationTitle,
         languagesTitle,
         technicalSkillsTitle,
         activeLang
    }) => {
    return (
        <SidebarContainer>
            <ProfileImage />
            <Header activeLang={activeLang}/>
            <Info  activeLang={activeLang} email={info.email} mobile={info.mobile} contactInformationTitle={contactInformationTitle}  />
            <Technologies  activeLang={activeLang} technicalSkillsTitle={technicalSkillsTitle}/>
            <Languages  activeLang={activeLang} languagesTitle={languagesTitle} />

        </SidebarContainer>
    );
};

export default Sidebar;