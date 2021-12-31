//* Imports
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');


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
app.use(express.static('Develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//* Tell server to listen for requests
app.listen(PORT, function(){
    console.log("Server is on port 3000");
});