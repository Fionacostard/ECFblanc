import styled from "styled-components"; 
import quiche from "../assets/quiche.jpg";
import Commentaire from "../comments/commentApp.js";
//import ListeCommentaire from "../comments/commentList.js";

export default function Recette(){
    return (<Wrapper>
        <main>
            <article class="description">
                <img src={quiche} height="400 px" alt=""></img>
                <div class="reciepe">
                <h2>Quiche sans pâte</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <p>Allergene(s)  :<span>gluten</span></p>
                </div>
            </article>
            <article class="time">
                <p>temps de preparation:</p>
                <p>20 min</p>
            </article>
            <article class="time">
                <p>temps de repos:</p>
                <p>0 min</p>
            </article>
            <article class="time">
                <p>temps de cuisson:</p>
                <p>40 min</p>
            </article>
            <article class="recette">
                <h3>Ingredients:</h3>
                <ul>
                    <li>3 oeufs</li>
                    <li>50cl de lait</li>
                    <li>100g de fecule de mais</li>
                    <li>2 tranches jambon blanc</li>
                    <li>100g gruyere rapé</li>
                    <li>10g de beurre</li>
                    <li>2 poivrons</li>
                    <li>poivre</li>
                </ul>
            </article>
            <article class="recette">
                <h3>Etapes:</h3>
                <ol>
                    <li>Dans un saladier, versez la fécule de maïs. Ajoutez les œufs un à un en battant à l’aide d’un fouet. Versez le lait petit à petit tout en continuant de mélanger. Vous devez obtenir une pâte onctueuse et homogène.</li>
                    <li>Coupez les tranches de jambon en dés. Ajoutez-les à la préparation ainsi que le gruyère râpé. Poivrez à votre convenance.</li>
                    <li>lavez et coupez les poivrons en dés,  ajoutez et mélangez bien.</li>
                    <li>Beurrez soigneusement un moule à tarte de 24 cm de diamètre. Versez-y l’appareil à quiche.</li>
                    <li>Enfournez la quiche sans pâte pendant 40 minutes (four préchauffé à 180°C). Lorsqu'elle est bien dorée, retirez-la du four. Dégustez la quiche tiède ou froide.</li>
                </ol>
            </article>
        </main>
        <hr size="5" width="100%" color="black"></hr>
        <Commentaire/>
        </Wrapper>);
}; 

const Wrapper = styled.header`
.reciepe{
    margin-top: 5vh;
    background-color:${(props) => props.theme.brandColor};
    color: ${(props) => props.theme.backgroundColor};
}

h2 {
    color: ${(props) => props.theme.backgroundColor};
}

img{
    position: relative;
    margin-top: 5vh; 
}
p{
    margin:5vh;
}

.description{
    display: flex; 
    flex-direction: row; 
}

.time{
    display: flex; 
    flex-direction: row; 
    margin-left: 4vw; 
}

.recette {
    margin-left: 5vw; 
}

ol{
    list-style: lower-roman;
}

ul{
    list-style: square;
}

hr{
    margin-top: 8 vh;
    margin-bottom: 4 vh;
    position: center; 
}
`;