const express=require("express");
const app=express();
const router=express.Router();
const mdb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const ops={useUnifiedTopology: true}
const dbname="register_info";
mdb.connect(url,ops,(error,client)=>{
  if(error) throw error;
  let db=client.db(dbname);
  db.collection("persons").find({"age":{$lt:35}}).toArray((error,data)=>{
    if(error) throw error;
    console.log("年齢が35歳未満のデータ : ");
    console.log(data);
  });
  db.collection("persons").find({"gender":{$eq:"f"}}).toArray((error,data)=>{
    if(error) throw error;
    console.log("女性(genderが「f」)のデータ : ");
    console.log(data);
  });
  db.collection("persons").find({"age":{$lt:30}, "gender":{$eq:"m"}}).toArray((error,data)=>{
    if(error) throw error;
    console.log("年齢が35歳未満の男性のデータ : ");
    console.log(data);
  });

});

