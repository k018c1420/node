const express = require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.static("data"));
app.get("/mon1",(request, response)=>response.render("mon1",{"name":"Takumi Okamoto", "age":21}));
app.listen(3000);
