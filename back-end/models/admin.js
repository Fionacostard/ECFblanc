const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    firstName :{type: String, require: true}, 
    lastName:{type: String, require: true}, 
    email:{type: String, require: true},
    token:{type: String, require: true},
    salt:{type: String, require: true},
    hash:{type: String, require: true},
    dateOfBirth:{type: String, require: true},
    role:{type:String, default :"admin"},
}); 

const User = new mongoose.model("Admin", AdminSchema);

module.export = Admin; 