const mongoose = require("mongoose");

const AllergensSchema = new mongoose.Schema({
   name:{type: String, require: true},
}); 

const User = new mongoose.model("Allergens", UserSchema);

module.export = Allergens; 