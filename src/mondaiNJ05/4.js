const express = require("express");
const app = express();
app.get("/:abc",(request, response)=>{
    response.send("abc="+request.params.abc);
    console.log(request.url);   //  追加
    console.log(request.params) //  追加
});
app.listen(3000);
