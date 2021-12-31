//* Imports
const router = require('express').Router();
const htmlRoute = require('./htmlRoutes');
const fs = require('fs');
const path = require('path');
const notes = require('../Develop/db/db.json');

// let currentID = notes.length;

//* Functions
function rewriteNotes(){
    fs.writeFile("/Develop/db/db.json",{ recursive: true, encoding:'utf8' }, JSON.stringify(notes), (err)=>{
        if (err) throw err;
    });
}


//& GET request
router.get('/notes', function(req,res){
    return res.json(notes);
    
});

//& POST request
router.post('/notes', function(req,res){
    const newNote = req.body;
    // newNote["id"] = currentID +1;
    // currentID++;

    console.log(newNote);

    notes.push(newNote);
    rewriteNotes();

    // return res.status(200).end();
});


module.exports = router;