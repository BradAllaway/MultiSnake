var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', error: null }); // Ensure error is always passed
});

/* POST login form submission. */
router.post('/', function(req, res, next) {
  const { username, password } = req.body;

  // Replace this with actual authentication logic (e.g., database check)
  if (username === 'test' && password === 'test') {
    res.send('Login successful!');
  } else {
    res.render('login', { title: 'Login', error: 'Invalid credentials. Please try again.' });
  }
});


module.exports = router;