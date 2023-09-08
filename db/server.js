// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'secretpassword',
  database: 'employees_db'
},
console.log('Connected to the employees_db database.'));

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;