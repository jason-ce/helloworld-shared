'use strict';

var request = require('request');

exports.User = class User {

    getUserName(){
        return "me";
    }
};

exports.Google = class Google{
    constructor(){
        console.log("constructor called");
    }
    getJSON(callback){        
        let url = "https://inventory.data.gov/api/action/datastore_search?resource_id=d7c214da-cb07-4437-a6f4-ba89d1d9aca3&limit=5";
        request(url, function(err, res, body) {              
            callback(body);            
        });
    }
};