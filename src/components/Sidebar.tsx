// src/components/Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import Languages from './Languages';
import Technologies from './Technologies';
import Info from './Info';
import ProfileImage from "./ProfileImage";
import Header from "./Header";


interface SidebarProps {
    name:string;
    jobTitle:string;
    languages: any[];
    technologies: any[];
    info: {
        email: string;
        mobile: string;
    };
    contactInformationTitle:string,
    languagesTitle:string,
    technicalSkillsTitle:string
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
`;


const Sidebar: React.FC<SidebarProps> =
    ({
         languages,
         technologies,
         info,
         name,
         jobTitle,
         contactInformationTitle,
         languagesTitle,
         technicalSkillsTitle
    }) => {
    return (
        <SidebarContainer>
            <ProfileImage />
            <Header name={name} jobTitle={jobTitle} />
            <Technologies technologies={technologies} technicalSkillsTitle={technicalSkillsTitle}/>
            <Languages languages={languages} languagesTitle={languagesTitle} />
            <Info email={info.email} mobile={info.mobile} contactInformationTitle={contactInformationTitle}  />
        </SidebarContainer>
    );
};

export default Sidebar;