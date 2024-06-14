import {FC} from "react";
import styled from "styled-components";
import keywords from '../asset/data/keywords.json';


const Style = styled.div`
  grid-area: keywords;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  p {
    font-size: 0.015rem;
    margin: 0.05rem   0.01rem;
   // color: var(--web-mode-primary-background-color);
  }
`;

interface PropTypes {
}

const KeywordRenderer: FC<PropTypes> = () => {
    return (
        <Style>
            {keywords.map((keyword,index) => {
                return <p key={keyword + index}>{keyword}</p>
            })}
        </Style>
    )
};
export default KeywordRenderer;