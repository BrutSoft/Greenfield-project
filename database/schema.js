var Sequelize = require ('sequelize');
var sequelize = require ('../database.js');

var User = sequelize.define('user', {

});

var Donation = sequelize.define('donation', {
  amout: {
    type: Sequelize.NUMBER
  },
  
});