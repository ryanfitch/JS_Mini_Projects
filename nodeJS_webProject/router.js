function home(request, response) {
        if (request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
        }
}

// 3- Hangle HTTP route Get /:username 

function user(request, response) {
    var userName = request.url.replace("/", "")
    if (userName.length > 0) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");
        response.write(userName + "\n");
        response.end("Footer\n");

    }
}

module.exports.home = home;
module.exports.user = user;