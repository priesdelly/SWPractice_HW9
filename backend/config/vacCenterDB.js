const mysql = require('mysql');

let connection = mysql.createPool({
    host: 'localhost',
    user: 'vacCenter',
    password: '12345678',
    database: 'vacCenter'
});

module.exports = connection;