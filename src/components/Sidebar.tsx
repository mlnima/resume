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
        location: string;
    };
}

const SidebarContainer = styled.aside`
 
  grid-area: sidebar;
  flex: 1;
  background-color: var(--web-mode-tertiary-background-color);
  padding: .5rem ;
  //padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  //background-color: #CCE6E6;
  //@media print {
  //  background-color: transparent;
  //}
`;


const Sidebar: React.FC<SidebarProps> = ({ languages, technologies, info,name,jobTitle }) => {
    return (
        <SidebarContainer>
            <ProfileImage />
            <Header name={name} jobTitle={jobTitle} />
            <Technologies technologies={technologies} />
            <Languages languages={languages} />
            <Info email={info.email} mobile={info.mobile} location={info.location} />
        </SidebarContainer>
    );
};

export default Sidebar;