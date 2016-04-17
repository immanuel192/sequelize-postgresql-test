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
            var buffer = new Buffer(message.data);
            var msg = buffer.toString();
            var payload = JSON.parse(msg);

            var when = Date.now();
            var dt = when - payload.t1;
            console.log("with i = " + payload.zed + "; delta t = " + dt);
            // done(null, { t1: args.t1, zed: args.zed, bar: args.zed + 1, when: when })
        });
    });
});