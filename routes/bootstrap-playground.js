const express = require('express'); // Import Express only once
const router = express.Router();

// Define the route
router.get('/', (req, res) => {
    res.render('bootstrap-playground'); // Ensure this EJS file exists
});

module.exports = router; // Export the router