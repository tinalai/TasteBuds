var express = require('express');
var db = require('./config/database');
var yelp = require('./config/yelpSearch');
var http = require('http');
var Promise = require('bluebird');
var bodyParser = require('body-parser'); // may remove
var session = require('express-session'); // may remove
var nodemailer = require('nodemailer'); // may remove
var _ = require('underscore'); // may remove
var hogan = require('hogan'); // may remove
var fs = require('fs');
var transporter = nodemailer.createTransport('SMTP', {
  auth: {
    user: 'testingiplan@gmail.com',
    pass: 'this is a test'
  }
}); // may remove
var app = express();

require('./models/userModel');
require('./models/postModel');
require('./collections/posts');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // fix

app.use(bodyParser.urlencoded({
  extended: false;
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));

// required for passport
app.use(session({
  secret: 'anysecretisok',
  resave: false,
  saveUninitialized: true
})); // session secret

app.listen(process.env.PORT || 3000);
console.log('Listening...');