'use strict';

var request = require('request');

exports.User = class User {
    getUserName() {
        return "me";
    }
};

exports.Books = class Books {
        constructor() {
            console.log("constructor called");
        }
        getChapter(callback) {
            let url = "http://localhost:8000";
            //let url = "http://localhost:8000/study-schedule/api/v2/overview/?today=2017-03-06";
            request(url, function (err, res, body) {
                callback(body);          
            });
        }
        getSection(callback) {
            //let url = "http://localhost:8000";
            let url = "http://localhost:8000/study-schedule/api/v2/overview/?today=2017-03-06";
            request(url, function (err, res, body) {
                callback(body);          
            });
        }
    };