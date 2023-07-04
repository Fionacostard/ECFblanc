import styled from "styled-components"; 
import { Link } from "react-router-dom";

export default function Services(){
    return (
    <Wrapper>
    <h2>Mes services</h2>
    <div>
        <ul>
            <li> 
                <h3>Service 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </li>
            <li> 
                <h3>Service 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </li>
        </ul>
        <div class="lien">
        <h3>Pour plus d'informations</h3>
        <Link to="/me_contacter"><button>Me contacter</button></Link>
        </div>
    </div>
    </Wrapper>
    );
}; 

const Wrapper = styled.header`
.lien{
    margin-left: 2vw; 
    margin-top: 5vh; 
}

button{
        position: relative; 
        background-color: ${(props) => props.theme.brandColor};
        color: ${(props) => props.theme.backgroundColor};
        border:none; 
        padding: 12px; }
`;