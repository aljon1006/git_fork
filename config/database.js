const Mysql         = require('mysql');

var connection      = Mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "express",
    "port": 3308
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;