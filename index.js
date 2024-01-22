var express = require('express');
var app = express();
var x=0;

app.get('/goodbye', function(req, res){
    x++;
    res.send(x);
 });

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/hello', function(req, res){
    res.send("world");
 });
app.listen(3000);