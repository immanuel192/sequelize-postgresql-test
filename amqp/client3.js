var seneca = require('seneca')({ log: 'silent'})
    .add('role:create,foo:1', function(args, done) {
        var when = Date.now();
        var dt = when - args.t1;
        console.log("with i = " + args.zed + "; delta t = " + dt + "; t1 = " + args.t1 + " ; t2= " + when);
        done(null, { t1: args.t1, zed: args.zed, bar: args.zed + 1, when: when })
    })
    
    
for (var i = 0; i < 500; i++) {
    var t1 = Date.now();
    seneca.act('role:create,foo:1,zed:' + i + ",t1:" + t1, function(err, ret) {
        var when = Date.now();
        var dt = when - ret.when;
        var dt2 = when - ret.t1;
        console.log("with i = " + ret.zed + "; dt1 = " + dt + "; dt2 = " + dt2 + " ;  t1 = " + ret.when + " ; t2= " + when);
    });
}
