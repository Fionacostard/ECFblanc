const mongoose = require("mongoose");

const RegimesSchema = new mongoose.Schema({
    name:{type: String, require: true},
}); 

const User = new mongoose.model("Regimes", UserSchema);

module.export = Regimes; 