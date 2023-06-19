const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  res.send('Welcome to the Shoe Ordering Service');
});

module.exports = router;
