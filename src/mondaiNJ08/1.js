const express=require("express");
const app=express();
const router=express.Router();
const mdb=require("mongodb").MongoClient;
const url="mongodb://localhost:27017";
const ops={useUnifiedTopology: true}
const dbname="scores";
app.use(express.urlencoded({extended:false}));
app.use(express.static("views"));

// データ挿入
mdb.connect(url,ops,(error,client)=>{
	if(error) throw error;
	  console.log("Connected Successfully.");
	  let db=client.db(dbname);
	  data=[{"_id":0, "name":"asami", "point":75, "rank":"B"}, {"_id":1, "name":"ikeda", "point":81, "rank":"A"},{"_id":2, "name":"uchida", "point":65, "rank":"C"},
	  {"_id":3, "name":"ezaki", "point":77, "rank":"B"},{"_id":4, "name":"oda", "point":83, "rank":"A"},{"_id":5, "name":"kasai", "point":91, "rank":"S"},
	  {"_id":6, "name":"kimura", "point":58, "rank":"D"},{"_id":7, "name":"kudo", "point":66, "rank":"C"},{"_id":8, "name":"kenzaki", "point":71, "rank":"B"},
	  {"_id":9, "name":"koike", "point":44, "rank":"D"}];
	  db.collection("scores").insertMany(data,(error,result)=>{
	  client.close();
	});
});
// 成績で検索する処理
app.post("/form.html/rank", (request, response)=>{
	mdb.connect(url,ops,(error,client)=>{
		let rank = request.body.rank;
		let db=client.db(dbname);
		db.collection("scores").find({"rank":rank}).toArray((error,data)=>{
	 		if(error) throw error;
	  		response.end(JSON.stringify(data));
		});
	});
});
// 点数で検索する処理
app.post("/form.html/point", (request, response)=>{
	mdb.connect(url,ops,(error,client)=>{
		let point_l = parseInt(request.body.point_l);
		let point_h = parseInt(request.body.point_h);
		let db=client.db(dbname);
		db.collection("scores").find({$and:[{point:{$gte:point_l}},{point:{$lte:point_h}}]}).toArray((error,data)=>{
	 		if(error) throw error;
	  		response.end(JSON.stringify(data));
		});
	});
});
app.listen(3000);
