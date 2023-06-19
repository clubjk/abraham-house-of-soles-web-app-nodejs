const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set up routes
const indexRoute = require('./routes/index');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up routes
app.use('/', indexRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
