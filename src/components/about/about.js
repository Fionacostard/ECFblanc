import styled from "styled-components";
import image from "../assets/thispersondoesnotexist_1.jpg" ; 
import { Link } from "react-router-dom";

export default function About(){
    return (
    <Wrapper>
    <h2>A propos</h2>
    <div class="a_propos">
        <img src={image} width="340px" height="340px"></img>
            <div class="texte">
                <p>Sandrine Coupart est une diététicienne-nutritionniste dont le cabinet est situé à Caen. En tant que professionnelle de santé, elle prend en charge des patients dans le cadre de consultations diététiques. Madame Coupart anime également des ateliers de prévention et d’information sur la nutrition.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <p class="signature">Sandrine Coupart</p>
                <div class="links">
                    <div class="link"> <h3>Decouvrir les services</h3> <Link to= "/mes_services"><button>Mes services</button></Link></div>
                    <div class="link2"> <h3>Me contacter</h3><Link to= "/me_contacter"><button>Me contacter</button></Link></div>
            </div>
        </div>
    </div>
    </Wrapper>
    );
}; 

const Wrapper = styled.header`

    .a_propos {
        display: flex;
        flex-direction: row;
        margin-top: 5vh;  
    }


    .texte{
        margin-top: 20px; 
        line-height: 1.5;
        flex: 4;  
        margin: 20px; 
        text-align: justify; 
    }

    img{
        widht: 10 px;
        height: 10 px;
        flex: 1;  
    }

    button{
        background-color: ${(props) => props.theme.brandColor};
        color: ${(props) => props.theme.backgroundColor};
        border:none; 
        padding:12px; 
        
    }

    button:hover{
    background-color: ${(props) => props.theme.accentColor};
}

    .links{
        display: flex; 
        flex-direction: row; 
    }
    
    .link{
        margin-top: 10vh;
        flex: auto;    
        display: flex; 
        flex-direction: column; 
    }

    .link2{
        margin-top: 10vh;  
        flex: auto;
        display: flex; 
        flex-direction: column; 
    }

    .signature{
        margin-top: 20px; 
        font-size: 1.5vw; 
        float: right; 
        font-family: Homemade Apple; 
    }
`;