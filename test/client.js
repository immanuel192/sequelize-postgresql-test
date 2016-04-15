/**
 * Created by root on 6/17/15.
 */
var amqpClient = require('./index');
var amqp_url = "amqp://guest:guest@192.241.179.185:5672";//Change to your own username, password, and address and/or vhost
var options = {
    // servers: [
    //     { 'host': "42.11.11.123", port: 12201 }//Put your own graylog server here!
    // ],
    // hostname: "node-microservice" // the name of this host
    // (optional, default: os.hostname())
};//If you don't have a graylog system, simply comment and take out options. It still works without a logging system

amqpClient.connect_amqp(amqp_url).then(
    function() {
        for (var i = 0; i < 100; i++) {
            var t1 = Date.now();
            var payload = {
                zed: i,
                t1: t1
            }
            amqpClient.send('testing', payload, 60000).then(
                function onFulfilled(ret) {
                    var when = Date.now();
                    var dt = when - ret.when;
                    var dt2 = when - ret.t1;
                    console.log("with i = " + ret.zed + "; dt1 = " + dt + "; dt2 = " + dt2 + " ;  t1 = " + ret.when + " ; t2= " + when);
                },
                function onTimeout(err) {
                    console.log(err);
                }
            )
        }
    }
);