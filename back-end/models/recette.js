const mongoose = require("mongoose");

const RecetteSchema = new mongoose.Schema({
    titre :{type: String, require: true}, 
    description:{type: String, require: true}, 
    image:{type: String, require: true},
    preparation:{type: String, require: true},
    repos:{type: String, require: true},
    cuisson:{type: String, require: true},
    public:{type: Boolean, require: true},
    ingredient:{type: String, require: true},
    steps:{type: String, require: true},
    allergens1:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    allergens2:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    allergens3:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    allergens4:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    regimes1:{type: mongoose.Schema.Types.ObjectId, ref:"Regimes"},
    regimes2:{type: mongoose.Schema.Types.ObjectId, ref:"Regimes"},
    regimes3:{type: mongoose.Schema.Types.ObjectId, ref:"Regimes"},
}); 

const User = new mongoose.model("Recette", RecetteSchema);

module.export = Recette; 