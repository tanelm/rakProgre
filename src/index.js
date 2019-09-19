import homepage from "./homepage.js";
import itempage from "./itempage.js";

console.log("tere olen index fail");


window.addEventListener("load", () =>{
    homepage.setup();
    itempage.setup();
});