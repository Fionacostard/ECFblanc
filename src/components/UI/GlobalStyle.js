import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.fontColor};
        font-family: Oxygen; 
    }

    h1, h2, h3, h4{
        font-family: Dosis; 
    }

    h2{
        text-decoration: underline; 
        text-decoration-color: ${(props) => props.theme.accentFont};
        text-align: center;
    }

    h3{
        color:  ${(props) => props.theme.accentFont};
    }
`; 

export default GlobalStyle; 

