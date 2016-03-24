//Problem:  We need a simple way to look at a users badge count and javascript points from a web browser.
//Solution:  Use node.js to perform the profile look ups and serve our templates via HTTP

// 1- create a web server

var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    resquest.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');

// 2- Handle HTTP route Get / Post
        //if URL === "/" && "get"
        //show search
        //if URL == "/" && "post"
        // redirect to /:username

// 3- Hangle HTTP route Get /:username 

// 4- Function that handles the reading of files and merge in values

