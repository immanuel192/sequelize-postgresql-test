var config = {
    seneca: {
        // Any global seneca option 
        timeout: 3000
    },
    amqp: {
        // Broker connection settings 
        hostname: '192.241.179.185',
        port: 5672,
        username: 'guest',
        password: 'guest'
    },
    pins: {
        // Pins used in .client and .listen methods 
        client: ['role:entity']
        // listen: ['level:info', 'cmd:rollback,proc:status']
    },
    autoStart: false
};

var seneca = require('seneca-amqp')(config)

seneca.start()
    .then(function() {
        for (var i = 0; i < 100; i++) {
            var t1 = Date.now();
            seneca.act('role:entity,foo:1,zed:' + i, function(err, ret) {
                var dt = ret.when - t1;
                console.log("with i = " + i + "; delta t = " + dt);
            });
        }
    })
    .catch(console.error);