//* Imports
const express = require('express');
const fs = require('fs');
const path = require('path');


//* Variables
// Instantiate the server
const app = express();
// Assign PORT number
const PORT = process.env.PORT || 3000;

//* Express Methods
// Parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// Parse incoming JSON data
app.use(express.json());
// Allows us to use non-specified static files
app.use(express.static('public'));


//* Routes

//& GET home route
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

//& GET notes route
app.get('/notes', function(req,res){
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

//& GET wildcard route
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


//* Tell server to listen for requests
app.listen(PORT, function(){
    console.log("Server is on port 3000");
});