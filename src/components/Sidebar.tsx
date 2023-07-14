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
}

const SidebarContainer = styled.aside`
 
  grid-area: sidebar;
  flex: 1;
  background-color: var(--web-mode-tertiary-background-color);
  padding: .5rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Sidebar: React.FC<SidebarProps> = ({ languages, technologies, info,name,jobTitle }) => {
    return (
        <SidebarContainer>
            <ProfileImage />
            <Header name={name} jobTitle={jobTitle} />
            <Technologies technologies={technologies} />
            <Languages languages={languages} />
            <Info email={info.email} mobile={info.mobile}  />
        </SidebarContainer>
    );
};

export default Sidebar;