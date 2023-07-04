const encryptPassword = require("../utils/encryptPassword")

async function userGet(req,res){
    try{
        const User = req.app.get("models").User;
        const MyUsers = await User.find();
        res.json(MyUsers); 
    }catch(error){
        return error.message;
    }
}

async function userCreate(req,res){
    try{
        if(!req.body.password){
            return res.json("no password");
        }
        if (req.role !=="admin") {
            return res.json("Unauthorized");
        }
        console.log(req.role)
        const {token, salt, hash}= encryptPassword(req.body.password);

        const User = req.app.get("models").User; 
        
        const NewUser = await new User({
            firstName :req.body.firstname, 
            lastName:req.body.lastName, 
            email:req.body.email,
            token, 
            salt, 
            hash,
            dateOfBirth:req.body.dateOfBirth,
            role:req.body.role,
            allergens1,
            allergens2, 
            allergens3, 
            allergens4, 
            regimes1,
            regimes2,
            regimes3,
        }).save();
        res.json(NewUser);
    }catch (error){
        res.json(error.message);
    }
}

async function userUpdate(req,res){
    try{
            if (req.body._id || req.body.toModify){
                return res.json("_id manquant ou champs manquant");
            }
        const User = req.app.get("models").User;
        const ToModifyUser = await User.findById(req.body._id);
        const toModifyKeys = Object.keys(ToModifyUser); 
        for(const key of toModifyKeys){
            ToModifyUser[key]=raq.body.toModify[key]; 
        }
        await ToModifyUser.save();
        console.log(req.body.toModify)
        res.json(ToModifyUser);
    }catch(error){
        res.json(error.message);
    }
}


async function userDelete(req,res){
    try{
            if (req.body._id){
                return res.json("_id manquant");
            }
        const User = req.app.get("models").User;
        const ToDeleteUser = await User.findById(req.body._id); 
        await ToDeleteUser.remove();
        res.json("Succesfully deleted");
    }catch(error){
        res.json(error.message);
    }
}

async function userLogin(req,res){
    try{
            if (!req.body.email ||!req.body.password){
                return res.json("_id or password missing");
            }
        const User = req.app.get("models").User;
        const toVerifyUser = await User.findById(req.body.email);
        if (!toVerifyUser){
            return "No email found"
        }
        res.json(encryptPassword(toVerifyUser, req.body.password));
    }catch(error){
        res.json(error.message);
    }
}

module.exports={userGet, userCreate, userUpdate, userDelete, userLogin}; 