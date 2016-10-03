const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const stripeKey = require('./stripe.config.js');
const stripe = require ('stripe')(stripeKey);

// Nodegun/Email setup ============================
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const mgAPIkey = require('./mailgun.config.js');

const mgAuth = {
  auth: {
    api_key: mgAPIkey,
    domain: 'sandbox4b6bb820be194dcba1386b97280458fc.mailgun.org'
  }
};

const nodemailerMailgun = nodemailer.createTransport(mg(mgAuth));

// ================================================

const app = express();

const PORT = process.env.PORT || '3000';

// Middleware setup
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.post('/payment', function (req, res) {
  var charge = stripe.charges.create({
    amount: req.body.amount,
    currency: 'usd',
    source: req.body.token,
    description: 'Website Donation'
  }, function (err, charge) {
    if (err && err.type === 'StripeCardError') {
    // The card has been declined
      console.error(err);
      res.send(err);
    } else {
      console.log('GREAT SUCCESS', charge);
      res.status(201).send();
      //Send Emails
      var message = 'Hi Brutsoft, we just received a donation of $' +
        charge.amount / 100;
      var emailOptions = {
        from: 'brutsoftNOLA@gmail.com',
        to: 'brutsoftNOLA@gmail.com',
        subject: 'Donation Received',
        text: message
      };
      nodemailerMailgun.sendMail(emailOptions, function (err, info) {
        if (err) {console.error(err);}
        else {console.log('Email sent! ', info);}
      });
    }
  });
});

app.post('/order', function (req, res) {
  var swagOrdered = req.body;
  var emailOptions = {
    from: 'brutsoftNOLA@gmail.com',
    to: 'brutsoftNOLA@gmail.com'
  };
  var subject = swagOrdered.sticker ? 'Sticker' : '';
  subject += swagOrdered.sticker && swagOrdered.shirt.ordered ? ' and ' : '';
  subject += swagOrdered.shirt.ordered ? 'Shirt' : '';
  emailOptions.subject = subject + ' ordered!';

  emailOptions.text = ' \n\
  Hello BrutSoft!\n\
  \n\
  You have received an order for ' + subject + ' \n\
  \n\
  The address for this person is:\n\
  Name: ' + swagOrdered.address.name + '\n\
  Street Address: ' + swagOrdered.address.streetAddress + '\n\
  City: ' + swagOrdered.address.city + '\n\
  State: ' + swagOrdered.address.state +   '\n\
  Zip Code' + swagOrdered.address.zip + '\n\
  \n\
  Thank you!';

  nodemailerMailgun.sendMail(emailOptions, function (err, info) {
    if (err) {console.error(err);}
    else {console.log('Swag email sent! ', info);}
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
