// Assuming you have an Express server, let's create an API endpoint to publish messages to RabbitMQ

const express = require('express');
const { setupRabbitMQ } = require('./rabbitmq.service');
const app = express();

app.use(express.json());

app.post('/produce', async (req, res) => {
    console.log(12)
  const { message } = req.body;

  try {
    // const tsage published:', message);

    res.sendStatus(200);
  } catch (error) {
    console.error('Failed to publish message:', error);
    res.sendStatus(500);
  }
});

app.listen(3004, () => {
  console.log('Server listening on port 3004');
});