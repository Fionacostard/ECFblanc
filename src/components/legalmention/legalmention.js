import styled from "styled-components"; 

export default function LegalMention(){
    return (<Wrapper>
        <h2>Mention Légales</h2>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        </Wrapper>);
}; 

const Wrapper = styled.header`
div{
    margin-top: 5vh; 
}
`;