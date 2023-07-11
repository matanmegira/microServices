const express = require("express");
const { getPolicyId } = require("./policy");
const app = express();
const port = 3005; // Set the port number to listen on

// Define your routes and request handlers here

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get("/policy/:classId", (req, res) => {
  const classId = req.params.classId;
  const policy = getPolicyId(classId);
  console.log(policy);
  res.send(policy);
});
