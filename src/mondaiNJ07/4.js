const express=require("express");
const app=express();
const router=express.Router();
const mdb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const ops={useUnifiedTopology: true}
const dbname="register_info";

app.get("/", (request, response)=>{
    mdb.connect(url,ops,(error,client)=>{
        if(error) throw error;
        let db=client.db(dbname);
        db.collection("persons").find({"name":{$eq:request.query.name}}).toArray((error,data)=>{
            if(error) throw error;
            response.send(data);
        });
        // {
        //     _id: 1,
        //     name: "kato",
        //     age: 33,
        //     gender: "f"
        // }
    });
});

app.listen(3000);