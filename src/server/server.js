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

  var contacts = getContacts();

  contacts = sortingContacts(contacts);

  res.end(contacts);
});

app.get('/unsortedContacts', function(req, res) {
  res.end(getContacts());
});

app.post('/addContact', function(req,res) {
  var contacts = getContacts();
  var id;
  contacts = JSON.parse(contacts);
  if(contacts.contacts[0] != undefined) {
    id = Number(contacts.contacts[contacts.contacts.length - 1].id) + 1;
  } else {
    id = 0;
  }
  req.body.id = id;
  contacts.contacts.push(req.body);
  contacts = JSON.stringify(contacts);
  fs.writeFileSync('./contacts.json', contacts);
  res.end();
});

app.delete('/deleteContact/:id', function(req, res) {
  var data = getContacts();
  data = JSON.parse(data);
  var index = findContactIndex(req.params.id, data);
  data.contacts.splice(index, 1);
  data = JSON.stringify(data);
  fs.writeFileSync('./contacts.json', data);
  res.end();
});

app.put('/sortContacts/:searchParam', function(req, res) {
  var newContacts = {contacts:[]};
  var contacts = getContacts();
  contacts = JSON.parse(contacts);
  for(var i = 0; i < contacts.contacts.length; i++) {
    for(var j in contacts.contacts[i]) {
      if(j == 'firstName' || j == 'lastName') {
        if(contacts.contacts[i][j].toLowerCase().indexOf(req.params.searchParam.toLowerCase()) != -1 ) {
          newContacts.contacts.push(contacts.contacts[i]);
          break;
        }
      }
    }
  }
  newContacts = JSON.stringify(newContacts);
  newContacts = sortingContacts(newContacts);
  res.end(newContacts);
});

app.put('/editContact', function(req, res) {
  var contact = JSON.stringify(req.body);
  fs.writeFileSync('./contacts.json', contact);
  res.end();
});



function getContacts() {
  var contacts = fs.readFileSync('./contacts.json', 'utf-8');


  return contacts;
}

function sortingContacts(contacts) {
  contacts = JSON.parse(contacts);
  for(var i = 0; i < contacts.contacts.length; i++) {
    for(var j = 0; j < contacts.contacts.length - 1; j++) {
      var place;
      if(contacts.contacts[j].firstName.toLowerCase() == contacts.contacts[j + 1].firstName.toLowerCase()) {
        if(contacts.contacts[j].lastName.toLowerCase() > contacts.contacts[j + 1].lastName.toLowerCase()) {
          place = contacts.contacts[j];
          contacts.contacts[j] = contacts.contacts[j + 1];
          contacts.contacts[j + 1] = place;
        }
      }
      else if(contacts.contacts[j].firstName.toLowerCase() > contacts.contacts[j + 1].firstName.toLowerCase()) {
        place = contacts.contacts[j];
        contacts.contacts[j] = contacts.contacts[j + 1];
        contacts.contacts[j + 1] = place;
      }
    }
  }
  contacts = JSON.stringify(contacts);
  return contacts;
}

function findContactIndex(id, data) {
  for(var i = 0; i < data.contacts.length; i++) {
    if(data.contacts[i].id == id) {
      return i;
    }
  }
}

app.listen(3000, function(){console.log("listening on port 3000")});
