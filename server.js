var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app =  express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.get("/survey", function(req, res) {
//   res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// });
 
// app.use(function(req, res) {
//         res.sendFile(path.join(__dirname, "/app/public/home.html"));
//     });

// app.use(express.static('app'));

require("./app/routing/htmlRoutes.js")(app);


app.listen(3000, function(){
    console.log('running on 3000')
});