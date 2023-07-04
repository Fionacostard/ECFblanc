import styled from "styled-components"; 

export default function Contact(){
    return(<Wrapper>
    <h2>Me Contacter</h2>
    <div class="contact">

        <form form method="post" action="">
            <div class="mb-3">
                <label for="email" class="form-label">Adresse mail</label>
                <input type="mail" class="form-control" id="email" placeholder="example@mail.fr"/>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" placeholder="entrez votre message"/>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </div>
    </Wrapper>)
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