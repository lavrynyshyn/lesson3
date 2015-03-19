//var cache = require('memory-cache');
var obj = [];

var setData = function (key, user){
    obj[key] = user
/*    cache.put(key, user);
    if (key == 10){
        cache.clear();
    }*/
};


module.exports.setData = setData;
module.exports.obj = obj;
