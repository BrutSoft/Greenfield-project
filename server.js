const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT || '3000';

// Middleware setup
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/payment', function (res, req) {
  console.log('hahaha made it here you butts!');
});
// Hey! Listen! Hey!
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
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
