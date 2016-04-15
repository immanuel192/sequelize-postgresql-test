var amqp = require('amqp');

var connection = amqp.createConnection({ 
    host: '192.241.179.185' 
});

// Wait for connection to become established.
connection.on('ready', function () {
    console.log("amqp ready");
  // Use the default 'amq.topic' exchange
  connection.queue('my-queue', function (q) {
      // Catch all messages
      q.bind('#');

      // Receive messages
      q.subscribe(function (message) {
        // Print messages to stdout
        console.log(message);
      });
  });
});