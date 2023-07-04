import styled from "styled-components"; 
import { Link } from "react-router-dom";

export default function Footer(){
    return (
    <Wrapper>
        <Link to="/mention_legales">Mention Légales</Link>
        <Link to="/politique_de_confidentialité">Politique de confidentialité</Link>
    </Wrapper>);
}; 

const Wrapper = styled.footer`

height:80px; 
display:flex; 
justify-content:center; 
align-items: center; 
background-color:${(props) => props.theme.brandColor};
color: ${(props) => props.theme.backgroundColor};

    a{
        text-decoration:none; 
        color: inherit; 
        margin-left: 10px; 
        margin-right: 10px; 
        font-family: Oxygen;

    }

    a:hover{
        color:${(props) => props.theme.accentColor};
        font-weight: bold; 
    }

`; 