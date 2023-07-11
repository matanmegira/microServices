const express = require('express');
const app = express();
const port = 3001; // Set the port number to listen on

// Define your routes and request handlers here

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/attendance', (req, res) => {
    res.send('yessssssss!');
  });