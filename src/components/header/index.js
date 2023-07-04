import styled from "styled-components"; 
import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    return (
    <Wrapper>
        <Link to="/"><h1>Sandrine Coupart diététique</h1></Link>
        <nav class="navbar navbar-expand-md">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Link to= "/recettes" class="nav-item"><MenuLoc isCurrentPage={location.pathname==="/recettes"}>Recettes</MenuLoc></Link>
                <Link to= "/mes_services" class="nav-item"><MenuLoc isCurrentPage={location.pathname==="/mes_services"}>Mes services</MenuLoc></Link>
                <Link to="/about" class="nav-item"><MenuLoc isCurrentPage={location.pathname==="/about"}>A propos</MenuLoc></Link>
                <Link to="/me_contacter" class="nav-item" ><MenuLoc isCurrentPage={location.pathname==="/me_contacter"}>Contact</MenuLoc></Link>
            </div>
        </nav>
            <Link to="/se_connecter"><button>Se connecter</button></Link>
    </Wrapper>
    );
}; 

const Wrapper = styled.header`
height:80px; 
display:flex; 
justify-content:space-between; 
align-items: center; 
background-color:${(props) => props.theme.brandColor};
color: ${(props) => props.theme.backgroundColor};

h1{
    margin-left: 15px ;
}

a{
        text-decoration:none; 
        color: inherit; 
        margin-left: 10px; 
        margin-right: 10px;  
        font-family: Oxygen;

}

a:hover{
    font-weight: bold; 
}
    
button{
    background-color:${(props) => props.theme.accentColor};
    border:1px solid ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.backgroundColor};
    shadow: none;
    padding: 20 px;
    height: 50px;  
}
button:hover{
    background-color: ${(props) => props.theme.brandColor};
}
`; 

const MenuLoc = styled.p`
    border-bottom: 2px solid ${(props) => props.theme.accentColor} ${(props) => props.isCurrentPage?"": "transparent"};
    color: ${(props) => props.theme.backgroundColor};
`; 