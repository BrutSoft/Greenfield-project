var dbAuth = {};

dbAuth.username = 'REPLACE ME';//replace with your username. Likely root. 
dbAuth.password = 'REPLACE ME';//replace with your password that you set up for your local mysql. 

module.exports = dbAuth;

/**
 * 
 * Instructions: 
 * 
 * First, resave this file without the underscore ('_'). 
 * 
 * Then, replace the above with your own username and password. 
 * 
 * Make sure you go into mySQL and have a database named "donation_page". When runing mysql, write "CREATE DATABASE donation_page;"
 * 
 * It should work after that. Restart your node server and see if you get the successful connect message. 
 * 
 */
