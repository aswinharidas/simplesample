console.log("The Application is running");

console.log(process.env);


var http = require("http");
var port = process.env.PORT || 3000;

http.createServer(function(request, response){

	response.statusCode = 200;
	response.setHeader("Content-Type","text/html")
	response.end("<h1>Hello World</h1>");

}).listen(port, function(){
	console.log("Listening on : "+port);
})