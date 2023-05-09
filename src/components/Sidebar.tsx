// src/components/Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import Languages from './Languages';
import Technologies from './Technologies';
import Info from './Info';
import ProfileImage from './ProfileImage';
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
  flex: 1;
  background-color: #f8f9fa;
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Sidebar: React.FC<SidebarProps> = ({ languages, technologies, info,name,jobTitle }) => {
    return (
        <SidebarContainer>
            <ProfileImage />
            <Header name={name} jobTitle={jobTitle} />
            <Languages languages={languages} />
            <Technologies technologies={technologies} />
            <Info email={info.email} mobile={info.mobile} location={info.location} />
        </SidebarContainer>
    );
};

export default Sidebar;