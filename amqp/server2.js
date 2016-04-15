var seneca = require('seneca')()
    .use('seneca-amqp-transport')
    .add('role:create,foo:1', function(args, done) {
        var when = Date.now();
        var dt = when - args.t1;
        console.log("with i = " + args.zed + "; delta t = " + dt + "; t1 = " + args.t1 + " ; t2= " + when);
        done(null, { t1: args.t1, zed: args.zed, bar: args.zed + 1, when: when })
    })
    .listen({
        // name: 'ffasfs1',
        type: 'amqp',
        pin: 'role:create',
        url: 'amqp://guest:guest@192.241.179.185:5672'
    });