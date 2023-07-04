import styled from "styled-components"; 

export default function AddRecette(){
    return (
    <Wrapper>
    <h2>Ajout Recette</h2>
    <form>
        <div class="row">
            <div class="col">
                <label for="name" class="form-label">Nom de la recette</label>
                <input type="text" class="form-control" id="name"/>
            </div>
        <div class="col">
                <label for="decription" class="form-label">Description</label>
                <textarea type="text" class="form-control" id="description"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="image" class="form-label">Image</label>
                <input type="file" class="form-control" id="image"/>
            </div>
        <div class="col">
                <label for="preparation" class="form-label">Temps de preparation</label>
                <input type="text" class="form-control" id="preparation"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="repos" class="form-label">Temps de Repos</label>
                <input type="text" class="form-control" id="repos"/>
            </div>
        <div class="col">
                <label for="cuisson" class="form-label">Temps de cuisson</label>
                <input type="text" class="form-control" id="cuisson"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="ingredient" class="form-label">Ingredients</label>
                <textarea type="text" class="form-control" id="ingredient"/>
            </div>
        <div class="col">
                <label for="steps" class="form-label">Etapes</label>
                <textarea type="text" class="form-control" id="steps"/>
            </div>
            <div class="form-group row">
        <div class="form-check col-sm-10 public">
                    <input class="form-check-input" type="checkbox" value="" id="valid"/>
                        <label class="form-check-label" for="valid">Recette publique</label>
                </div>
        </div>
        </div>
        <div class="form-group row">
            <div class="col"> <h4>Allergènes</h4>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_1"/>
                        <label class="form-check-label" for="All_1">Gluten</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_2"/>
                        <label class="form-check-label" for="All_2">Crustacés</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_3"/>
                        <label class="form-check-label" for="All_3">Oeufs</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_4"/>
                        <label class="form-check-label" for="All_4">Poissons</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_5"/>
                        <label class="form-check-label" for="All_5">Arachides</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_6"/>
                        <label class="form-check-label" for="All_6">Soja</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_7"/>
                        <label class="form-check-label" for="All_7">Lait</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_8"/>
                        <label class="form-check-label" for="All_8">Fruit a coques</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_9"/>
                        <label class="form-check-label" for="All_9">Céleri</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_10"/>
                        <label class="form-check-label" for="All_10">Moutrde</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_11"/>
                        <label class="form-check-label" for="All_11">Sésame</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_12"/>
                        <label class="form-check-label" for="All_12">Anhydreide sufureux</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_13"/>
                        <label class="form-check-label" for="All_13">Lupin</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="All_14"/>
                        <label class="form-check-label" for="All_14">Mollusques</label>
                </div>
            </div>
            <div class="col"> <h4>Régimes</h4>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="regime"/>
                        <label class="form-check-label" for="regime">Vegétarien</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="regime2"/>
                        <label class="form-check-label" for="regime2">Végan</label>
                </div>
            </div>
        <div class="form-group row">
            <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    </div>
    </form>
    </Wrapper>
    );
}; 
const Wrapper = styled.header`

 form{
    margin-top: 5vh; 
 }

 button{
    background-color: ${(props) => props.theme.brandColor};
    float: right;  
    border:none;
    color: ${(props) => props.theme.backgroundColor};
    padding: 10px;   
    margin-top: 5vh; 
 }

 h4{
    margin-top: 4vh; 
 }

 .public {
    margin-left: 4vw;
    margin-top: 2vh; 
 }
`;