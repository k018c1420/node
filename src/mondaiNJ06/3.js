const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static("data"));
app.get("/mon3",(request, response)=>response.render("mon3",{"data":"<td>Takumi Okamoto</td><td>21</td>"}));
app.listen(3000);
