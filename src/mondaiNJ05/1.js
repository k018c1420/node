const express = require("express");
const app = express();
app.get("/", (request, response)=>{
    response.send("HELLO!");
    
    console.log(request.url); // 追加
    console.log(request.query); //  追加
    console.log(request.query.abc); //  追加


});
app.listen(3000);