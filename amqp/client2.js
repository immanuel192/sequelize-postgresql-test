var seneca = require('seneca')()
    .use('seneca-amqp-transport')
    .client({
        name: 'dffsda',
        type: 'amqp',
        url: 'amqp://guest:guest@192.241.179.185:5672',
        pin: 'role:create'
    });


// for (var i = 0; i < 100; i++) {
//     var t1 = Date.now();
//     seneca.act('role:create,foo:1,zed:' + i + ",t1:" + t1, function (err, ret) {
//         var when = Date.now();
//         var dt = when - ret.when;
//         var dt2 = when - ret.t1;
//         console.log("with i = " + ret.zed + "; dt1 = " + dt + "; dt2 = " + dt2 + " ;  t1 = " + ret.when + " ; t2= " + when);
//     });
// }

var i = 0;
setInterval(function () {
    i++;
    var t1 = Date.now();
    var payload = {
        zed: i,
        t1: t1
    };
    // sendMessage(connection, 'my-queue', payload);
    seneca.act('role:create,foo:1,zed:' + i + ",t1:" + t1, function (err, ret) {
        var when = Date.now();
        var dt = when - ret.when;
        var dt2 = when - ret.t1;
        console.log("with i = " + ret.zed + "; dt1 = " + dt + "; dt2 = " + dt2);
    });
}, 100);
