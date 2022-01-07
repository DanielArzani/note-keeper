const express = require("express");
const router = express.Router();
const htmlController = require("../controllers/htmlControllers");

// Home Page Route
router.get("/", htmlController.getHomePage);

// Notes Page Route
router.get("/notes", htmlController.getNotesPage);

// For all invalid routes, send back to home route
router.get("*", htmlController.invalidRoutes);

module.exports = router;
