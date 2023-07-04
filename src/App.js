import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import Layout from './components/UI/Layout';
import Home from "./components/Home/Home";
import About from './components/about/about'; 
import Recettes from './components/Recettes/recettes';
import Services from './components/Services/services';
import LegalMention from './components/legalmention/legalmention';
import Contact from './components/contact/Contact';
import Connexion from './components/connexion/connexion';
import Confidential from './components/confidential/confidential';
import AddClient from './components/add_client/add_client';
import AddRecette from './components/add_recette/add_recette';
import Recette from './components/recette_quiche/recette_quiche';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>;
          <Route path="/about" element={<About/>}></Route>; 
          <Route path="/recettes" element={<Recettes/>}></Route>; 
          <Route path="/mes_services" element={<Services/>}></Route>; 
          <Route path="/mention_legales" element={<LegalMention/>}></Route>; 
          <Route path='/me_contacter' element={<Contact/>}></Route>; 
          <Route path="/se_connecter" element={<Connexion/>}></Route>; 
          <Route path="/politique_de_confidentialité" element={<Confidential/>}></Route>; 
          <Route path="/ajouter_client" element={<AddClient/>}></Route>; 
          <Route path="/ajouter_recette" element={<AddRecette/>}></Route>; 
          <Route path="/recette_quiche" element={<Recette/>}></Route>;
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
