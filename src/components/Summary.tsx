import {FC} from "react";
import styled from "styled-components";

const Style = styled.p``;


const SummaryTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
`;

interface PropTypes {
    summaryData:string
    summaryTitle:string
}



const Summary: FC<PropTypes> = ({summaryData,summaryTitle}) => {
    return (
        <Style>
            <SummaryTitle>{summaryTitle}</SummaryTitle>
            {summaryData}
        </Style>
    )
};
export default Summary;
