const redis = require('redis');

// Create a Redis client
const client = redis.createClient();



async function getValue(key) {
    // Connect to Redis
client.on('connect', () => {
    console.log('Connected to Redis');
  });

    // Read data from Redis
client.get(key, (error, result) => {
    if (error) {
      console.error('Failed to read data from Redis:', error);
      process.exit(1);
    }
  
    console.log('Data from Redis:', result);
  
    // Perform any further processing with the data here...
  
    // Quit Redis connection
    client.quit();
  });
}

async function setValue(key, value) {
    const client = redis.createClient({
        username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
        password: 'secret', // use your password here
        socket: {
            host: 'http://172.16.225.242',
            port: 6379,
            tls: false,
            // key: readFileSync('./redis_user_private.key'),
            // cert: readFileSync('./redis_user.crt'),
            // ca: [readFileSync('./redis_ca.pem')]
        }
    });

    // Connect to Redis
    client.on('connect', () => {
        console.log('Connected to Redis');
    });

    client.set(key, value, (error, response) => {
    if (error) {
        console.error('Failed to write data to Redis:', error);
        process.exit(1);
    }

    console.log('Data written to Redis:', response);

    // Quit Redis connection
    client.quit();
    });
}

module.exports = {setValue, getValue};