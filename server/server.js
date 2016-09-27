var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = proccess.env.PORT || '5000'

app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
})
