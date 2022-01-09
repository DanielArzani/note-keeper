// Imports
const express = require("express");
const htmlRouter = require("./routes/htmlRoutes");
const apiRouter = require("./routes/apiRoutes");

// Instantiate app variable
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Change this using path.join()
app.use(express.static(__dirname + "/Develop/public"));

app.use("/api/notes", apiRouter);
app.use("/", htmlRouter);

// Listen for server
app.listen(process.env.PORT || 3000, console.log("Server is running"));
