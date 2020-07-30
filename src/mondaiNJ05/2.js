const express = require("express");
const path = require("path");   //  追加
app.listen(3000);
const app = express();
app.get("/", (request, response)=>response.send("HELLO!"));
app.get("/test", (request, response)=>response.send("HELLO! Test"));
app.get("/hi", (request, response) => response.sendFile(path.join(__dirname, "2.html")))    //  追加
app.listen(3000);
app.use((request,response)=>response.sendStatus(404));