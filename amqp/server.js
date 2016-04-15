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
        // client: ['role:entity'],
        listen: ['level:info', 'role:entity']
    },
    autoStart: false
};

var seneca = require('seneca-amqp')(config)

seneca.add('role:create,foo:1', function(args, done) {
    var when = Date.now();
    var dt = when - args.t1;
    console.log("with i = " + args.zed + "; delta t = " + dt + "; t1 = " + args.t1 + " ; t2= " + when);
    done(null, { t1: args.t1, zed: args.zed, bar: args.zed + 1, when: when })
})

seneca.start()
    .then(function() {
        console.log('Seneca is ready');
    })
    .catch(console.error);