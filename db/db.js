let env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];


// const knex = require('knex')(config[env]);

module.exports.knex = require('knex')(config);