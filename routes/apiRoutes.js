const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiControllers");

// Get All Notes and Create New Note
router.route("/").get(apiController.getAllNotes).post(apiController.createNote);

// Get Single Note and Delete Single Note
router
  .route("/:id")
  .get(apiController.getNote)
  .delete(apiController.deleteNote);

module.exports = router;
