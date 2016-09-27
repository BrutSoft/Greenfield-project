var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || '3000';

app.use(express.static('public'));
app.use(bodyParser.json());

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
