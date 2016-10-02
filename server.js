const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const stripe = require ('stripe')('sk_test_iVtKJqVJanL4FTCV5GbkFL5g');

const app = express();

const PORT = process.env.PORT || '3000';

// Middleware setup
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/payment', function (req, res) {
  console.log('hahaha made it here you butts!');
  console.log(req.body);
  var charge = stripe.charges.create({
    amount: req.body.amount,
    currency: 'usd',
    source: req.body.token,
    description: 'Website Donation'
  }, function (err, charge) {
    if (err && err.type === 'StripeCardError') {
    // The card has been declined
      console.error(err);
    } else {
      console.log('GREAT SUCCESS', charge);
    }
  });
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
