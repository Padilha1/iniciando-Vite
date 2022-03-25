import styled, { createGlobalStyle } from "styled-components";
import "./css/fonts.css"

// color:#845EC2;
// color:#4B4453
// color:#F3C5FF;
// color:#B0A8B9;


export const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    body{
        box-sizing:border-box;
        margin: 0;
        padding:0;
        font-family:'Open Sans';
        font-weight:normal;
        background:#4B4453;
        width:100%;
        height:100%;
    }
    a{
        color: #B0A8B9;
        text-decoration:none;
    }

`;

export const Title = styled.h1`
    font-size: 1.2 em;
`;

export const NavContent = styled.div`
    background: transparent;
    width: 100;
    padding-top:1em;
`;
export const NAV = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;

export const SpaceDiv = styled.div`
    display: flex;
    justify-content: space-between;
    gap:1em;
`