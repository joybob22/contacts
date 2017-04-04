var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.get('/contacts', function(req, res) {
  res.end(getContacts());
});

app.post('/addContact', function(req,res) {
  console.log("Made it to post");
  var contacts = getContacts();
  contacts = JSON.parse(contacts);
  contacts.contacts.push(req.body);
  contacts = JSON.stringify(contacts);
  fs.writeFileSync('./contacts.json', contacts);
  res.end();
});




function getContacts() {
  var contacts = fs.readFileSync('./contacts.json', 'utf-8');

  return contacts;
}


app.listen(3000, function(){console.log("listening on port 3000")});
