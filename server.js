var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app =  express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname + '/app/public')));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(app.get('port'), function(){
    console.log('running on 3000')
});