var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/',function(req,res){

res.send('test app for heroku by muraly');
});

app.listen(port);