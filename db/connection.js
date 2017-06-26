const environment = 'development';
//gets you access to db through knex file
const config = require('../knexfile.js');
const environmentConfig = config[environment];
//give knex the config to run
const knex = require('knex');
const connection = knex(environmentConfig);

module.exports = connection;
