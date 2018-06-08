var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  var waitlist = [];

  var tables = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "./reservation.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "./view.html"));
});


// display all tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// display waitlist
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/clear", function(req, res) {
  return res.json(clear.body);
});

// create reservation
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newtable = req.body;

    if (tables.length < 5) {
        tables.push(newtable);
        res.json(true);
    } else {
      waitlist.push(newtable);
      res.json(false);
    }
    console.log(newtable);
    
});
















app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
