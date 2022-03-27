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
    @media screen and (min-width:390px){
    Section  {
        display:grid;
        grid-template-columns:1fr 1fr;
        
        }
    }
`;

export const Title = styled.h3`
    font-size: 1 em;
    color: #B0A8B9;
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

export const Section = styled.section`
    margin: 3em 0;
    width:90%;
    height:100vh;
    text-align:center;
    display:grid;
    grid-template-columns:2fr 2fr;
    justify-content: space-around;


    
`

export const Img = styled.img`
    width:15em;
    border-radius:50px;
`


export const Div = styled.div`
    h4{
        margin-top:0;
        margin-bottom:10px;
    }
    p{
        margin-top:0;
        margin-bottom:15px;
    }

    color:#F3C5FF;

    
`