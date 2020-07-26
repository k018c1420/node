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
			response.write(data);	//	追加
			response.end("POSTED...");
		}
		else if(request.method=="GET"){
			response.write(data);
			response.end();
		}
	});
	
}

const server=http.createServer(connect);
server.listen(port);