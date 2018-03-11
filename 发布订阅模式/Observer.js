/**
 * 定义观察者
 * @type {{regist, fire, remove}}
 */
var Observer = (function () {
    var _message = {};
    return {
        regist: function (type, fn) {
            if (_message[type] === undefined) {
                _message[type] = Array.of(fn);
                return;
            }
            if (_message[type] instanceof Array) {
                _message[type].push(fn);
            }
        },
        fire: function (type, args) {
            if (!_message[type]) {
                return;
            }
            //根据自己实际情况，定义信息体
            var event = {
                type: type,
                args: args || {}
            }
            var i = 0;
            var length = _message[type].length;
            //依次去除方法，挨个执行
            for (; i<length; i++) {
                _message[type][i].call(this, event);
            }
        },
        remove: function (type, fn) {
            if (_message[type] instanceof Array) {
                var len = _message[type].length - 1;
                for (; len > 0; len--) {
                    _message[type][len] === fn && _message[type].splice(len, 1);
                }
            }
        }
    }
})();


module.exports = Observer;