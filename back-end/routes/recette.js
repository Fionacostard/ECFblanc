const {recetteGet, recetteCreate} = require ("../controllers/recette");

function recetteRoute(app){
   //Create
   app.post("/recetteCreate", recetteCreate); 
    
    //Read
    app.get("/recettes", recetteGet);

}

module.exports = recetteRoute;