const path = require("path");

// Get Home Page
exports.getHomePage = function (req, res) {
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"), (err) => {
    if (err) console.log(err);
  });
};
// Get Notes Page
exports.getNotesPage = function (req, res) {
  res.sendFile(path.join(__dirname, "../Develop/public/notes.html"), (err) => {
    if (err) console.log(err);
  });
};

// Invalid Routes
exports.invalidRoutes = function (req, res) {
  res.sendFile(path.join(__dirname, "../Develop/public/index.html"), (err) => {
    if (err) console.log(err);
  });
};
