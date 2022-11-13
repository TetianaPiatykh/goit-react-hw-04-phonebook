import styled from "styled-components";

export const ContactLi = styled.li`
  display: flex;
//   flex-direction: column;
  justify-content: space-between;
  width: 100%;
   border: 1px solid ;
    border-color: #cdedff;
    margin-bottom: 5px;
  
`;

export const ContactListUl = styled.ul`
width: 100%;
`;

export const ContactName = styled.p`
padding-left: 5px;
font-size: 18px;
font-weight: 700;
color: #295a7a;
`;

export const DeletBtn = styled.button`
background-color: #85a4b9;
    border: none;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 12px;
         &:hover {
    border: 3px solid ;
    border-color: #93a0a9;
    font-size: 16px;
    padding: 6px 12px;
     box-shadow: 1px 1px 2px 3px #85a4b9;
     }
`;