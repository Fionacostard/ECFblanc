import styled from "styled-components"; 
import quiche from "../assets/quiche.jpg"; 
import cake from "../assets/cake.jpg";
import chili from "../assets/chili-sin-carne.jpg";
import { Link } from "react-router-dom";

export default function Recettes(){
    return (
    <Wrapper>
    <h2>Recettes</h2>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
        </form>
        <main class="recettes">
            <article>
                <Link to="/recette_quiche"><img src={quiche} width="500px"></img></Link>
                <div>
                    <h4>Quiche sans pâte</h4>
                    <span class="allergn">Sans gluten</span>
                </div>
            </article>
            <article>
                <img src={chili} width="500px"></img>
                <div>
                    <h4>Chili sin carne</h4>
                    <span class="regime">Régime végétarien</span>
                </div>
            </article>
            <article>
                <img src={cake} width="500px"></img>
                    <div>
                    <h4>Gateau allergy friendly</h4>
                    <span class="allergn">Sans oeuf</span> <span class="allergn">Sans lait</span> <span class="allergn">sans fruit a coques</span> <span class="allergn">sans soja</span>
                </div>
            </article>
        </main>
    </Wrapper>);
}; 

const Wrapper = styled.header`
.form-inline{
    display: flex; 
    display-direction: row; 
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

main{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:30px;
    position: center; 
  padding: 10px;
    
}

article{
    display: flex; 
    flex-direction: column; 
}

img{
    flex: 2;
}

div{
    background-color:${(props) => props.theme.brandColor}; 
    color:${(props) => props.theme.backgroundColor}
}

.allergn{
    background-color:${(props) => props.theme.fontColor};
    color:${(props) => props.theme.backgroundColor};
    padding: 10 px; 
    border-radius:30px;
}

.regime{
    background-color:${(props) => props.theme.accentFont};
    color:${(props) => props.theme.backgroundColor};
    padding: 10 px; 
    border-radius:30px;
}

@media (min-width: 1240px) {
  .recettes { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 1240px) {
  .recettes { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 500px) {
  .recettes { grid-template-columns: repeat(1, 1fr); }
}

`;