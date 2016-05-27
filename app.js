var http = require('http');
var fs = require('fs');


http.createServer(function(request, response) {
	    console.log('request starting...');

	var url = request.url;
	switch(url) {
		case '/' :
			getStaticFileContent(response, 'public/index.html','text/html');
			break;
		case '/add':
			getStaticFileContent(response, 'public/add.html','text/html');
			break;
		case '/css/style.css':
			getStaticFileContent(response, 'css/style.css','text/css');
			break;
		case '/js/app.min.js':
			getStaticFileContent(response, 'js/app.min.js','text/javascript');
			break;
		default:

		response.writeHead(404, {'Content-Type':'text/plain'});
		response.end('404 - Page not Found');
}

}).listen(8000);
console.log('Hello World, this is the Cas Fee Projekt Nr.1');
console.log('Server Running at localhost:80');


function getStaticFileContent(response, filepath, contentType) {
	fs.readFile(filepath, function(error, data){
		if(error) {
			response.writeHead(500,{'Content-Type':'text/plain'});
			response.end('500 - Internal Server Error');
	}
	if(data) {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(data);
		}
			else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
	});
}




