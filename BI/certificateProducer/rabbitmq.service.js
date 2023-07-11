// const amqp = require('amqplib');

// async function setupRabbitMQ() {
//   try {
//     const connection = await amqp.connect('amqp://localhost'); // Replace with your RabbitMQ server URL
//     const channel = await connection.createChannel();

//     const queue = 'my_queue'; // Replace with your queue name

//     await channel.assertQueue(queue, { durable: true });

//     console.log('RabbitMQ connection established');

//     return channel;
//   } catch (error) {
//     console.error('Failed to establish RabbitMQ connection:', error);
//     process.exit(1);
//   }
// }

// // Start the connection setup
//  const channelPromise = setupRabbitMQ();
