console.log(new Date().getFullYear() + ': Server listening to port 5000');
// NOTE: Header area
var express = require('express'); // NOTE:  sources express from node_modules
var app = express(); // NOTE: creates the express app
app.use(express.static('server/public')); // NOTE:  express-app-static-file-looker

var bodyParser = require('body-parser'); // NOTE: gets just-created data
app.use(bodyParser.urlencoded({extended: true})); // NOTE: creates req.body below

// NOTE: END Header area



// NOTE: app.post /ownerData
var ownerData =[
];

app.post('/ownerData', function(req, res){  // NOTE: body-parser install, must match client.js
  var newOwners = req.body;
  ownerData.push(newOwners);
  console.log(newOwners);
  res.sendStatus(200);
}); // NOTE: FOR: app.post








// NOTE:
app.listen(5000); // NOTE: server listening to port 5000
