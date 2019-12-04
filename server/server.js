/* Don't need .env for Heroku */
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const database = require("./database.js");
const PORT = process.env.PORT || 3000;
const apiRouter = require("./apiRouter.js");

app.use(bodyParser.json())
app.use(apiRouter);

/** FOr images and bundle.js */
app.use("/static", express.static("dist/static"));

/** For index.html */
app.use("/*", express.static("dist"));

function listen(){
    // Heroku needs process.env.PORT
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`);
    });
}

database.connect()
    .then(() =>{
        listen();
    })
    .catch( err => {
        console.log("something happened", err);
    });