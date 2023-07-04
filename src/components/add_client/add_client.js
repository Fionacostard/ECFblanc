import styled from "styled-components"; 

export default function AddClient(){
    return (
    <Wrapper>
    <h2>Ajout Client</h2>
    <form>
        <div class="row">
            <div class="col">
                <label for="firstname" class="form-label">Prénom</label>
                <input type="text" class="form-control" id="firstname"/>
            </div>
        <div class="col">
                <label for="familyname" class="form-label">Nom</label>
                <input type="text" class="form-control" id="familyname"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="email" class="form-label">e-mail</label>
                <input type="email" class="form-control" id="email"/>
            </div>
        <div class="col">
                <label for="birthday" class="form-label">Date de naissance</label>
                <input type="date" class="form-control" id="familyname"/>
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
`;