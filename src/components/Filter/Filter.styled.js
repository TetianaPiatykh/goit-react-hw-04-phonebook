import styled from "styled-components";

export const FilterLabel = styled.label`
display: flex;
width: 100%;
justify-content: flex-start;
font-size: 20px;
font-weight: 700;
color: #295a7a;
  outline: none;
`;

export const FilterInput = styled.input`
    width: 100%;
    padding: 6px 12px;
    margin: 8px 0;
    outline: none;
    // box-sizing: border-box;
    border-radius: 4px;
    border: 3px solid;
    border-color: #a4d7f9;
     &:focus {
    border: 3px solid ;
    border-color: #a4d7f9;
     background-color: #f8fcff;
     box-shadow: 1px 1px 2px 3px #a4d7f9;
     }
    
`;