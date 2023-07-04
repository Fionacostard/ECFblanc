import styled from "styled-components"; 
import recettes from "../assets/breakfast.jpg" ;
import services from "../assets/food.jpg" ;  
import { Link } from "react-router-dom";

export default function Home(){
    return (
    <Wrapper>
    <main>
        <article>
            <div>
                <h4>Recettes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <Link to="/recettes"><button>Acceder aux recettes</button></Link>
            </div>
            <img src={recettes} width="500px" class="pictures"></img>
        </article>
        <article>
            <img src={services} width="500px" class="pictures"></img>
            <div>
                <h4>Services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div class="links">
                    <Link to="/mes_services"><button>Mes services</button></Link>
                    <Link to="/me_contacter"><button>Me contacter</button></Link>
                </div>
            </div>
            
        </article>
    </main>
    </Wrapper>
    );
}; 

const Wrapper = styled.header`

    main{
        display: flex; 
        gap: 20px; 
        flex-direction: column; 
        padding: 5vh; 
    }

    div{
        background-color:${(props) => props.theme.brandColor};
        color:${(props) => props.theme.backgroundColor};
        flex:2; 
        text-align: justify; 
    }

    h4,p{
        margin-top: 10px; 
        padding:10px; 
    }

    article{
        display: flex; 
        flex-direction: row; 
    }

    img{
        flex: 1; 
        max-widht:500px; 

    }

    .links{
        display: flex; 
        felx-direction: row; 
        gap:20px; 
    }

    button{
        padding: 12px; 
        margin: 40 px; 
        background-color: ${(props) => props.theme.accentColor};
        border: none; 
        color: ${(props) => props.theme.backgroundColor};
        margin-left: 10px; 
    }

    button:hover {
        background-color: ${(props) => props.theme.brandColor};
        border: 1px solid ${(props) => props.theme.backgroundColor};
    }

    @media screen and (max-width: 900px) {

.pictures {display:none;}

}
`;