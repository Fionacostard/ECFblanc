const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName :{type: String, require: true}, 
    lastName:{type: String, require: true}, 
    email:{type: String, require: true},
    token:{type: String, require: true},
    salt:{type: String, require: true},
    hash:{type: String, require: true},
    dateOfBirth:{type: String, require: true},
    role:{type:String, default :"client"},
    allergens1:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    allergens2:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    allergens3:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    allergens4:{type: mongoose.Schema.Types.ObjectId, ref:"Allergens"}, 
    regimes1:{type: mongoose.Schema.Types.ObjectId, ref:"Regimes"},
    regimes2:{type: mongoose.Schema.Types.ObjectId, ref:"Regimes"},
    regimes3:{type: mongoose.Schema.Types.ObjectId, ref:"Regimes"},
}); 

const User = new mongoose.model("User", UserSchema);

module.export = User; 