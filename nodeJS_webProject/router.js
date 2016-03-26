var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeaders = {"Content-Type": "text/html"};

function home(request, response) {
        if (request.url === "/") {
            if (request.method.toLowerCase() === "get") {
                response.writeHead(200, commonHeaders);
                renderer.view("header", {}, response);
                renderer.view("search", {}, response);
                renderer.view("footer", {}, response);
                response.end();
            } else {
                request.on("data", function(postBody) {
                    console.log(postBody.toString());
                    var query = querystring.parse(postBody.toString());
                    response.writeHead(303, {"Location": "/" + query.username});
                    response.end();
                });
            }
        }
}

// Hangle HTTP route Get /:username 

function user(request, response) {
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);

        // Get json from API
        var studentProfile = new Profile(username);
        // On end
        studentProfile.on("end", function(profileJSON) {
                // Show profile
                var values = {
                    avatarUrl: profileJSON.gravatar_url,
                    username: profileJSON.profile_name,
                    badges: profileJSON.badges.length,
                    javascriptPoints: profileJSON.points.JavaScript
                };
                // Simple response
                renderer.view("profile", values, response);
                renderer.view("footer", {}, response);
                response.end();
        });
        // On 'Error'
        studentProfile.on("error", function(error){
                // Show error
                renderer.view("error", {errorMessage: error.message}, response);
                renderer.view("search", {}, response);
                renderer.view("footer", {}, response);
                response.end();
        });
    }
}

module.exports.home = home;
module.exports.user = user;