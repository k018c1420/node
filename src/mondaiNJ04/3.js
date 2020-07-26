const port=3000;
const http=require("http");
const httpstatus=require("http-status-codes");
const fs=require("fs");

function getType(url){
	const typeMap={
		".html":"text/html",
		".jpg":"image/jpg",
		".png":"image/png"
	};
	for(let key in typeMap){
		if(url.endsWith(key)) return typeMap[key];
	}
	return "text/plain";
}
function connect(request, response){
	url = request.url=="/"? "index.html":"."+request.url;
	response.writeHead(httpstatus.OK,{"Content-Type":getType(url)});
	fs.readFile(url,(err,data)=>{
		if(err) response.end(httpstatus.NOT_FOUND+": Not Found.");
		else if(request.method=="POST"){
			var dataP="";
			request.on("data",(chunk)=>dataP+=chunk)
			       .on("end",()=>{
					   var estr = dataP.substring(5)					//	編集
						console.log(dataP);
						//	語尾が.jpg or .pngだったら画像表示
						if(estr.substring(estr.length - 4) == ".jpg" || estr.substring(estr.length - 4) == ".png") {	//	編集
							response.write(data);						//	編集
							response.end("<img src='" + estr +  "'>");	//	編集
						} else {										//	編集
							response.end(data);							//	編集
						}												//	編集
			       })
		}
		else if(request.method=="GET"){
			response.write(data);
			response.end();
		}
	});
	
}

const server=http.createServer(connect);
server.listen(port);
