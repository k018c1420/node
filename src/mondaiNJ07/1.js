const express=require("express");
const app=express();
const router=express.Router();
const mdb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const ops={useUnifiedTopology: true}
const dbname="register_info";

mdb.connect(url,ops,(error,client)=>{
  if(error) throw error;
  console.log("Connected Successfully.");
  let db=client.db(dbname);
  data=[{"_id":0, "name":"tanaka", "age":30, "gender":"m"}, {"_id":1, "name":"kato", "age":33, "gender":"f"}, 
  {"_id":2, "name":"sato", "age":28, "gender":"m"}, {"_id":3, "name":"suzuki", "age":39, "gender":"m"}, 
  {"_id":4, "name":"watabe", "age":44, "gender":"f"}];
  db.collection("persons").insertMany(data,(error,result)=>{
	  console.log("All data inserted.");
	  client.close();
  });
});
