// Importing express library
const express = require('express');

// Create our express app
const app = express();


// Create Route Handler
app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

// Constant port (as an environment variable) given by heroku or ny other server
const PORT = process.env.PORT || 5000;

//
app.listen(PORT);