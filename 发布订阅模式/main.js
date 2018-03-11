var Observer = require('./Observer');

Observer.regist('test', function(event) {
    console.log(event.type, event.args.message);
});

Observer.fire('test', { message: '消息' });