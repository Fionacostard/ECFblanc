const express = require("express");
const mongoose = require("mongoose");

const models = require("./models");
getRoleMiddleware = require("./utils/getRoleMiddleware");

mongoose.connect("mongodb://localhost/webapp", {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

const app = express();

app.set("models", models)

const userRoute = require("./routes/user");
const getRoleMiddleware = require("./utils/getRoleMiddleware");

app.use(express.json());
app.use(getRoleMiddleware());

userRoute(app);

app.listen(3000, () => {
    console.log("serveur successfully launched")
});