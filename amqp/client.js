var amqp = require('amqp');
var connection = amqp.createConnection({
    host: '192.241.179.185', port: 5672
});
var count = 1;

connection.on('ready', function() {
    var sendMessage = function(connection, queue_name, payload) {
        var encoded_payload = JSON.stringify(payload);
        connection.publish(queue_name, encoded_payload);
    }

    for (var i = 0; i < 100; i++) {
        var payload = {
            zed: i,
            t1: Date.now()
        };
        sendMessage(connection, 'my-queue', payload);
    }
})