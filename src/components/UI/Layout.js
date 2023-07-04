import styled, {ThemeProvider} from "styled-components"; 
import GlobalStyle from "./GlobalStyle";
import AppTheme from "./themes/themeapp.json";
import Header from "../header";
import Footer from "../footer";

export default function Layout({children}){
    return (
    <ThemeProvider theme={AppTheme}>
        <Wrapper>
            <GlobalStyle/>
                <Header/>
                    <Main>
                        {children}
                    </Main>
                <Footer/>
        </Wrapper>
    </ThemeProvider>
    ); 
};

const Wrapper = styled.div ``; 

const Main = styled.div `

    min-height : 84vh; 
    max-width: 2040px; 
    width:94%;  
    margin: auto; 
    margin-top: 30px; 
`; 