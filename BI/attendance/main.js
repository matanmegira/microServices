const express = require("express");
const { getAttendance } = require("./attendance");
const app = express();
const port = 3001; // Set the port number to listen on

// Define your routes and request handlers here

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/attendance/:classId", (req, res) => {
  const id = req.params.classId;
  const b = getAttendance(id);
  console.log(b);
  res.send(b);
});
