var seneca = require('seneca')({ log: 'silent'})
    .add('role:create,foo:1', function(args, done) {
        var when = Date.now();
        var dt = when - args.t1;
        console.log("with i = " + args.zed + "; delta t = " + dt + "; t1 = " + args.t1 + " ; t2= " + when);
        done(null, { t1: args.t1, zed: args.zed, bar: args.zed + 1, when: when })
    })
    .listen();