const homepage = require("./homepage.js");
const itempage = require("./itempage.js");

console.log("tere olen index fail");


window.addEventListener("load", () =>{
    homepage.setup();
    itempage.setup();
});