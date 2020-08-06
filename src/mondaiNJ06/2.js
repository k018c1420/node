const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static("data"));
let images = {"img0":"angry.png", "img1":"0323.jpg"}
app.get("/mon2",(request, response)=>response.render("mon2", images));
app.listen(3000);
