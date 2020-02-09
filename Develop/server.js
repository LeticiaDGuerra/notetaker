// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (DATA)
// =============================================================
var notes = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/notes", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// Displays all characters
app.get("/api/notes", function(req, res) {
  // return res.json(notes);
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

// // // Displays a single character, or returns false
// // // app.get("/api/characters/:character", function(req, res) {
// // //   var chosen = req.params.character;

// //   console.log(chosen);

// //   for (var i = 0; i < characters.length; i++) {
// //     if (chosen === characters[i].routeName) {
// //       return res.json(characters[i]);
// //     }
// //   }

//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/api/notes", function(req, res) {

  var newNotes = req.body;
  res.sendFile(path.join(__dirname, "./db/db.json"));

  console.log(newNotes);

  // We then add the json the user sent to the character array
  characters.push(newNotes);

  // We then display the JSON to the users
  res.json(newNotes);
});

// app.delete("/api/notes/:id", function(req, res) {

//   var newNotes = req.body;
//   res.sendFile(path.join(__dirname, "./db/db.json"));
  
//   console.log(newNotes);

//   // We then add the json the user sent to the character array
//   characters.push(newNotes);

//   // We then display the JSON to the users
//   res.json(newNotes);
// });
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});