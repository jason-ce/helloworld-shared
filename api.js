'use strict';

var request = require('request');

exports.User = class User {
    getUserName() {
        return "me";
    }
};

exports.Google = class Google {
        constructor() {
            console.log("constructor called");
        }
        getJSON(callback, url) {
            request(url, function (err, res, body) {
                callback(body);          
            });
        }
    };