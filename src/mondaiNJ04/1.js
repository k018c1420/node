const port=3000;
const http=require("http");
const httpstatus=require("http-status-codes");
const fs=require("fs");

function getType(url){
	const typeMap={
		".html":"text/plain",	//	編集
		".jpg":"image/jpg",
		".png":"image/png",
		".txt":"text/plain",	//	追加
		".xml":"text/xml",		//	追加
		".css":"text/css"		//	追加
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
		else{
			response.write(data);
			response.end();
		}
	});
}

const server=http.createServer(connect);
server.listen(port);
