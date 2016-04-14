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

seneca.add('role:entity,foo:1', function (args, done) {
    done(null, {bar: args.zed + 1, when: Date.now()})
  })
  .act('role:entity,foo:1,zed:0', console.log)
  
seneca.start()
  .then(function(){
    console.log('Seneca is ready');  
  })
  .catch(console.error);