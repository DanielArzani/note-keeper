const path = require('path');
const router = require('express').Router();

//& GET notes route
app.get('/notes', function(req,res){
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

//& GET home route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

//& GET wildcard route
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});