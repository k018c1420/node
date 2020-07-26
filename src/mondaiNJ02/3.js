const port=3000;
const http=require("http");

function connect(request, response){
	//console.log(request.method);
	console.log(request.url);
	//console.log(request.headers);
	//console.log(JSON.stringify(request.headers,null,2));
	response.writeHead(200,{
			"Content-Type":"text/html"
	});
	var msg="<h1>HELLO2!</h1><img src='test.jpg'>";
	response.write(msg);
	response.end();
}

const server=http.createServer(connect);
server.listen(port);