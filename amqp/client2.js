var seneca = require('seneca')()
    .use('seneca-amqp-transport')
    .client({
        type: 'amqp',
        url: 'amqp://guest:guest@192.241.179.185:5672',
        pin: 'role:create'
    });

    for (var i = 0; i < 100; i++) {
        var t1 = Date.now();
        seneca.act('role:create,foo:1,zed:' + i+",t1:"+t1, function(err, ret) {
			var when =Date.now(); 
            var dt = when - ret.when;
            console.log("with i = " + ret.zed + "; delta t = " + dt+ "; t1 = " + ret.when + " ; t2= " + when);
        });
    }
