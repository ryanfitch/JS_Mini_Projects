//Problem:  We need a simple way to look at a users badge count and javascript points from a web browser.
//Solution:  Use node.js to perform the profile look ups and serve our templates via HTTP

var router = require("./router.js");

// creates a web server

var http = require("http");

http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(3000);
console.log('Server running at 3000');

