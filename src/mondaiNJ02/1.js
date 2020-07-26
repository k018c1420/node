const port=3000;
const http=require("http");

function connect(request, response){
	response.writeHead(200,{
			"Content-Type":"text/html"
	});
	var msg="<h1>OKAMOTO TAKUMI</h1>";
	response.write(msg);
	response.end();
}

const server=http.createServer(connect);
server.listen(port);