var Profile = require("./profile.js");


function home(request, response) {
        if (request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");
        response.write("Search\n");
        response.end("Footer\n");
        }
}

// Hangle HTTP route Get /:username 

function user(request, response) {
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Header\n");

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
                response.write(values.username + " has " + values.badges + " badges\n");
                response.end("Footer\n");
        });
        // On 'Error'
        studentProfile.on("error", function(error){
                // Show error
                response.write(error.message + "\n");
                response.end('Footer\n');
        });
    }
}

module.exports.home = home;
module.exports.user = user;