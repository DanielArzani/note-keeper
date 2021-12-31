const router = require('express').Router();
const path = require('path');
const apiRoute = require('./apiRoutes');



//& GET home route
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

//& GET notes route
router.get('/notes', function(req,res){
    res.sendFile(path.join(__dirname, '../Develop/public/notes.html'));
});

//& GET wildcard route
router.get('*', function(req,res){
    res.sendFile(path.join(__dirname, '../Develop/public/index.html'));
});

module.exports = router;