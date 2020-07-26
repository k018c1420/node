const port=3000;
const http=require("http");

const server=http.createServer(function (request, response){
	response.writeHead(200,{
			"Content-Type":"text/html"
	});
	var msg="<h1>OKAMOTO TAKUMI</h1>";
	response.write(msg);
	response.end();
});
server.listen(port);