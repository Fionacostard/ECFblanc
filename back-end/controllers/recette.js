async function recetteGet(req,res){
    try{
        const Recette = req.app.get("models").Recette;
        const MyRecettes = await Recette.find();
        res.json(MyRecettes); 
    }catch(error){
        return error.message;
    }
}

async function recetteCreate(req,res){
    try{
        if (req.role !=="admin") {
            return res.json("Unauthorized");
        }

        const Recette = req.app.get("models").Recette; 
        
        const NewRecette = await new Recette({
            titre :req.body.titre, 
            description:req.body.description, 
            image:req.body.image,
            preparation:req.body.preparation,
            repos:req.body.repos,
            cuisson:req.body.cuisson,
            ingredient:req.body.ingredient,
            steps:req.body.steps,
            public:req.body.public,
            allergens1,
            allergens2, 
            allergens3, 
            allergens4, 
            regimes1,
            regimes2,
            regimes3,
        }).save();
        res.json(NewRecette);
    }catch (error){
        res.json(error.message);
    }
}


module.exports={recetteGet, recetteCreate}; 