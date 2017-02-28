'use strict';
var hello = require('./hello.js');

exports.helloText = hello.sayHello();
exports.goodbye = new hello.Goodbye();



//console.log(result);

// x = [1, 2, 3, 4, 5];

// y = x.filter(x => x > 2);

// console.log(y);
