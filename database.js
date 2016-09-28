var Sequelize = require('sequelize');
var dbAuth = require('./dbconfig');

var sequelize = new Sequelize('donation_page', dbAuth.username, dbAuth.password, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize; //export the connection