import {FC} from "react";
import styled from "styled-components";

const Style = styled.p``;


const SummaryTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
`;

interface PropTypes {
}



const Summary: FC<PropTypes> = ({}) => {
    return (
        <Style>
            <SummaryTitle>Summary</SummaryTitle>
            I am a Full Stack Web Developer with experience in a range of technologies including JavaScript, TypeScript, ReactJS, and NextJS. Having worked in both technical and customer-facing roles, I have honed my ability to deliver client-centered solutions, particularly in the development of CMS platforms. My recent education in Data Analytics has further broadened my skill set, embracing Machine Learning, SQL, and Python. I am also actively engaged in the developer community, managing a ReactJS-focused Facebook group, and creating educational programming content on YouTube.
        </Style>
    )
};
export default Summary;
