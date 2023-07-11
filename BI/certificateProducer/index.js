// Assuming you have an Express server, let's create an API endpoint to publish messages to RabbitMQ

const express = require('express');
const { setupRabbitMQ } = require('./rabbitmq.service');
const {setValue}  = require('./redis.service');
const app = express();

app.use(express.json());

app.post('/publish', async (req, res) => {
    console.log(12)
  const { message } = req.body;

  try {
    // const channel = await setupRabbitMQ();

    // const queue = 'my_queue'; // Replace with your queue name

    // channel.sendToQueue(queue, Buffer.from(message), { persistent: true });

    // console.log('Message published:', message);

    res.sendStatus(200);
  } catch (error) {
    console.error('Failed to publish message:', error);
    res.sendStatus(500);
  }
});

app.listen(3002, () => {
  console.log('Server listening on port 3000');
});