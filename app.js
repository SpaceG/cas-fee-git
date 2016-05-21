var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	var url = request.url;
	switch(url) {
		case '/' :
			getStaticFileContent(response, 'public/index.html','text/html');
			break;
		case '/add':
			getStaticFileContent(response, 'public/add.html','text/html');
			break;
		case '/about':
			getStaticFileContent(response, 'public/about.html','text/html');
			break;
		default:

		response.writeHead(404, {'Content-Type':'text/plain'});
		response.end('404 - Page not Found');
}

}).listen(3000);
console.log('Hello World, this is the Cas Fee Projekt Nr.1');
console.log('Server Running at localhost:3000');


function getStaticFileContent(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data){
		if(error) {
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500 -Onternal Server Error');
	}
	if(data) {
			response.writeHead(500,{'Content-Type':'text/html'});
			response.end(data);
		}
	});
}