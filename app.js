'use strict';
var utilities = require('./utilities.js');
var api = require('./api.js');

exports.utilities = utilities;
exports.api = api;

let google = new api.Google();
let tmp = google.getBody();
console.log(tmp);

//console.log(result);

// x = [1, 2, 3, 4, 5];

// y = x.filter(x => x > 2);

// console.log(y);
