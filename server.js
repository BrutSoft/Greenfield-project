var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var PORT = process.env.PORT || '3000';

// Middleware setup
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


// Database set up ================================

var db = require('./database.js');

// End Database Set up ============================


// Hey! Listen! Hey!
app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});

/**
 /$$                             /$$      /$$$$$$             /$$$$$$   /$$    
| $$                            | $$     /$$__  $$           /$$__  $$ | $$    
| $$$$$$$   /$$$$$$  /$$   /$$ /$$$$$$  | $$  \__/  /$$$$$$ | $$  \__//$$$$$$  
| $$__  $$ /$$__  $$| $$  | $$|_  $$_/  |  $$$$$$  /$$__  $$| $$$$   |_  $$_/  
| $$  \ $$| $$  \__/| $$  | $$  | $$     \____  $$| $$  \ $$| $$_/     | $$    
| $$  | $$| $$      | $$  | $$  | $$ /$$ /$$  \ $$| $$  | $$| $$       | $$ /$$
| $$$$$$$/| $$      |  $$$$$$/  |  $$$$/|  $$$$$$/|  $$$$$$/| $$       |  $$$$/
|_______/ |__/       \______/    \___/   \______/  \______/ |__/        \___/  
                                                                              
 */
