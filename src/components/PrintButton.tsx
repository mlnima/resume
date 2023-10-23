import React from 'react';
import {faPrint} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "styled-components";



const PrinterButton = styled.button`
  border: .2px solid black ;
  background-color: white;
  color: black;
  font-size: .9rem;
  border-radius: 8px;
  position: fixed;
  top: 8px;
  right: 108px;
  padding: 6px 12px;
  width: 48px;
  height: 48px;
  @media print {
    display: none;  // Change the layout to block for printing

  }
`;


const PrintButton = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <PrinterButton onClick={handlePrint}><FontAwesomeIcon icon={faPrint} /></PrinterButton>
    );
};

export default PrintButton;