var express = require('express');
var router = express.Router();
var mysql = require('mysql2');


// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL server
  user: 'root', // Replace with your MySQL username
  password: '*******', // Replace with your MySQL password
  database: 'snake' // Your database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', db.threadId);
});


/* GET users listing. */
router.get('/', function (req, res, next) {

  // Execute the query
  db.query('SELECT id, username FROM game_user', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results); // Send the users as JSON response
  });




  // res.send('respond with a resource');
});

module.exports = router;
