const fs = require("fs");
const path = require("path");
// Read DB before Event Loop starts
const allNotes = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../Develop/db/db.json"), "utf-8")
);

// Get All Notes
exports.getAllNotes = function (req, res) {
  res.json(allNotes);
};
// Get Note
exports.getNote = function (req, res) {
  // Convert id from string to number
  const id = req.params.id * 1;
  // Loop through array and check to see if id can be found within the array
  const note = allNotes.find((ele) => ele.id === id);

  res.json(note);
};
// Create Note
exports.createNote = function (req, res) {
  const note = req.body;
  // Push new Note to array
  allNotes.push(note);
  // Add and increment ID
  allNotes.forEach((obj, index) => {
    obj.id = index + 1;
  });

  // Write new note to db
  fs.writeFile(
    path.join(__dirname, "../Develop/db/db.json"),
    JSON.stringify(allNotes),
    (err) => {
      res.json(allNotes);
    }
  );
};
// Delete Note
exports.deleteNote = function (req, res) {
  // Convert id from string to number
  const id = req.params.id * 1;
  // Loop through array and check to see if id can be found within the array
  const note = allNotes.find((ele) => ele.id === id);
  // Remove selected note from array
  allNotes.splice(note.id - 1, 1);
  // Re-assign ID's
  allNotes.forEach((obj, index) => {
    obj.id = index + 1;
  });

  fs.writeFile(
    path.join(__dirname, "../Develop/db/db.json"),
    JSON.stringify(allNotes),
    (err) => {
      res.json(allNotes);
    }
  );
};
