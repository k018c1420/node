const port=3000;
const http=require("http");
const httpstatus=require("http-status-codes");
const modules=require("./2-module.js");

function connect(request, response){
	response.writeHead(httpstatus.OK,{
		"Content-Type":"text/html"
	});
    let msg=modules.routeMap[request.url];

	if(!msg){
		msg="<h1>HELLO2!</h1>";
	}
	response.end(msg);
}

const server=http.createServer(connect);
server.listen(port);
