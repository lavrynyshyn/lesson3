var users = require("./../lib/users");
var url = require("url");
var http = require("http");
var data = { };
var key = 0;



module.exports = {
    getAction: function(request, response, next){
        setTimeout(function(next){
            response.statusCode = 200;
            try{
                response.setHeader('Content-type','text/html; charset=utf-8');
                //console.log(JSON.stringify(users.obj, "", 4));
                if (request.url == "/users" & request.method == "GET") {
                    for (var i=1; i<users.obj.length; i++){
                        response.write("USER" + i + "</br>");
                        response.write(" -Name =" + JSON.stringify(users.obj[i].name) + "</br>");
                        response.write(" -Email =" + JSON.stringify(users.obj[i].email) + "</br>");
                        response.write(" -Desription=" + JSON.stringify(users.obj[i].description) + "</br>");
                        response.write(" -Age =" + JSON.stringify(users.obj[i].age) + "</br>");
                    }
                }
                response.end("");
                next();
            }catch(e){
                next(e);
            }
        }, 500, next)
    },
    postAction: function(request, response, next){
        setTimeout(function(next){
            response.statusCode = 200;
            try{
                var body = '';
                request.on('data', function (data) {
                    body += data;
                    //console.log("Partial body: " + body);
                    var obj = JSON.parse(body);
                    //console.log(obj.name + ' ' + obj.age);
                    var user = new Object();
                        user.name = obj.name;
                        user.email = obj.email;
                        user.description = obj.description;
                        user.age = obj.age;
                    users.setData(++key, user);
                });
                next();
            }catch(e){
                next(e);
            }
        }, 500, next)
    }
};