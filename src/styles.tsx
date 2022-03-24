import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    body{
        box-sizing:border-box;
        margin: 0;
        padding:0;
    }
`;

export const Title = styled.h2`
    font-size: 1.2 em;
`;

export const NavContent = styled.div`
    border-box
    border: 1px solid black;
    background: transparent;
    padding: 1em;   
    margin: 0;
    width: 100%;
`;
export const NAV = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;