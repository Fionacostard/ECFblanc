async function getRoleMiddleware(req, res, next) {
    if (!req.body?.token){
        req.role = "unauthentificated"; 
    }
    const User = req.app.get("models").User; 
    const ToCheckUser = await User.findOne({token: req.body.token}); 

    if (!ToCheckUser){
        req.role = "unauthentificated"; 
        return next(); 
    }

    req.role = ToCheckUser.role; 
    next(); 
}

module.exports = getRoleMiddleware;