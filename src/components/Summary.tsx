import {FC} from "react";
import styled from "styled-components";
import dictionary from '../asset/data/dictionary.json'
import {activeLangTypes} from "../tsTypes";

const Style = styled.div`
  margin: 1rem 0;
  h3 {
    margin: 0 0 0.25rem 0;
    padding: 0;
  }
`;

interface PropTypes {
    activeLang: activeLangTypes
}

const Summary: FC<PropTypes> = ({activeLang}) => {
    return (
        <Style>
            <h3>{dictionary.Summary[activeLang]}</h3>
            {dictionary.SummaryData[activeLang]}
        </Style>
    )
};
export default Summary;
