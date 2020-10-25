// The http.createServer() method includes request and response parameters which is supplied by Node.js.
// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.
// The response object can be used to send a response for a current HTTP request.
// If the response from the HTTP server is supposed to be displayed as HTML,
// you should include an HTTP header with the correct content type:

const http = require('http');

const server = http.createServer((req,res) => { 
    // console.log(req.url);
    if(req.url == "/"){
        res.end('hi this a response');
    }else if(req.url == "/about"){
        res.end('hi this about page');
    }else{
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end('<h1>Error 404 page doesn\'t exists</h1>');
    }
    
});

server.listen(1432,"127.0.0.1",() => {
    console.log('listening to port 1432');
});