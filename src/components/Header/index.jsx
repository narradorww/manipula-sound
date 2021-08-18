import React from 'react';
import styled from 'styled-components';
import {headerColor, textColor} from '../ui/variaveis'


const StyledHeader= styled.header`
background-color: ${headerColor};
color: ${textColor};
height: 70px;
font-size: 24px;
border-top-left-radius:20px;
border-top-right-radius:20px;
display:flex;
align-items: center;
padding: 0 32px 0 0;

span {
    font-weight: 500;
    margin-left: 24px;
}

h1 {
    font-weight: 500;
    margin-left: 8px;
}
`;

function Header(){
    return (
        <StyledHeader> <span> Manipula </span><h1>Sound </h1></StyledHeader>
    )
}

export default Header;