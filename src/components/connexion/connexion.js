import styled from "styled-components"; 

export default function Connexion(){
    return (
    <Wrapper>
    <form method="post" action="">
        <div class="mb-3">
            <label for="mail" class="form-label">Adresse Mail</label>
            <input type="email" class="form-control" id="mail"/>
        </div>
        <div class="mb-3">
            <label for="motdepasse" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="motdepasse"/>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="connexion"/>
            <label class="form-check-label" for="connexion">Rester Connecter</label>
        </div>
    <button type="submit">Submit</button>
    </form>

    </Wrapper>);
}; 

const Wrapper = styled.header`
button{
    background-color: ${(props) => props.theme.brandColor};
    float: right;  
    border:none;
    color: ${(props) => props.theme.backgroundColor};
    padding: 10px;   
}

button:hover{
    background-color: ${(props) => props.theme.accentColor};
}
`;