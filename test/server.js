/**
 * Created by root on 6/17/15.
 */
var amqpServer = require('./index');
var amqp_url = "amqp://guest:guest@192.241.179.185:5672";//Change to your own username, password, and address and/or vhost
var options = { noAck: false, prefetch_num: 100, messageTtl: 60000 };

function test(content) {
    return new Promise(function(resolve, reject) {
        var when = Date.now();
        var dt = when - content.t1;
        console.log("with i = " + content.zed + "; delta t = " + dt + "; t1 = " + content.t1 + " ; t2= " + when);
        resolve({ t1: content.t1, zed: content.zed, bar: content.zed + 1, when: when })
    });
}
amqpServer.server_listen(amqp_url, 'testing', test, options);