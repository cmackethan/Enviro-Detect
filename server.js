var counter = 0;
var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');
app.engine('html', mustacheExpress());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.get("/", function(request, response) {
		response.render("index.html");
});
app.listen(8080, console.log("Now listening on 8080"));
