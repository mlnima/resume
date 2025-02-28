import {FC} from "react";
import styled from "styled-components";
import dictionary from '../asset/data/dictionary.json'
import {activeLangTypes} from "../tsTypes";
import {SectionText, SectionTitle} from "./general/CommonStyledComponents";

const Style = styled.div`
    grid-area: summary;
    width: 100%;
    height: 100%;
    padding:  1rem 1rem;
    box-sizing: border-box;

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
            <SectionTitle>{dictionary.Profile[activeLang]}</SectionTitle>
            <SectionText>
                {dictionary.SummaryData[activeLang]}
            </SectionText>
        </Style>
    )
};
export default Summary;
