var hello = require('./hello.js');

hello.sayHello();

var goodbye = new hello.Goodbye();
var result = goodbye.goodbye();
//console.log(result);

// x = [1, 2, 3, 4, 5];

// y = x.filter(x => x > 2);

// console.log(y);