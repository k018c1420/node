const express=require("express");
const app=express();
const mdb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const ops={useUnifiedTopology: true}
const dbname="test";
// データ挿入
mdb.connect(url,ops,(error,client)=>{
	if(error) throw error;
	  console.log("Connected Successfully.");
	  let db=client.db(dbname);
	  data=[{"_id":0, "name":"asami", "age":75, "blood":"B"}, {"_id":1, "name":"ikeda", "age":81, "blood":"A"},{"_id":2, "name":"uchida", "age":65, "blood":"O"},
	  {"_id":3, "name":"ezaki", "age":77, "blood":"B"},{"_id":4, "name":"oda", "age":83, "blood":"A"},{"_id":5, "name":"kasai", "age":91, "blood":"AB"},
	  {"_id":6, "name":"kimura", "age":58, "blood":"AB"},{"_id":7, "name":"kudo", "age":66, "blood":"O"},{"_id":8, "name":"kenzaki", "age":71, "blood":"B"},
	  {"_id":9, "name":"koike", "age":44, "blood":"AB"}];
	  db.collection("col02").insertMany(data,(error,result)=>{
	  client.close();
	});
});
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.get("/",(request,response)=>response.render("index",{"title":"BLOOD:"}));
app.post("/", (request, response)=>{
	let blood_type = request.body.blood;
	mdb.connect(url,ops,(error,client)=>{
	  if(error) throw error;
	  //console.log("Connected Successfully.");
	  let db=client.db(dbname);
	  db.collection("col02").find({"blood":blood_type}).toArray((error,data)=>{
		if(error) throw error;
		response.render("result",{"name":blood_type+"型の検索結果","data":data})
	  });

	});
});
app.listen(3000);
