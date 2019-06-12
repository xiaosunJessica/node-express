const mysql = require('mysql');
const dbConfig = require('./dbConfig');

const pool = mysql.createPool(dbConfig.mysql)

module.exports = pool;