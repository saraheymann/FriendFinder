var express = requre("express");
var bodyparser = require("body-parser");
var path = require("path");

var app =  express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(3000, function(){
    console.log('running on 3000')
});