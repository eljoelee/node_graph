var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var models = require('./models/temp');

var router = require('./routes')(app, models)

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(port, function() {
  console.log("Express Sever has started on port " + port);
});

app.use(express.static('public'));

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/temp');
