//Problem:  We need a simple way to look at a users badge count and javascript points from a web browser.
//Solution:  Use node.js to perform the profile look ups and serve our templates via HTTP

var router = require("./router.js");

// 1- create a web server

var http = require("http");

http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
}).listen(3000);
console.log('Server running at 3000');

// 2- Handle HTTP route Get / Post
        //if URL === "/" && "get"
        //show search
        //if URL == "/" && "post"
        // redirect to /:username


// 4- Function that handles the reading of files and merge in values

