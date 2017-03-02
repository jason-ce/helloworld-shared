'use strict';

var request = require('request');

exports.User = class User {

    getUserName(){
        return "me";
    }
};

exports.Google = class Google{
    getBody(){
        //request.get('https://www.google.com/logos/doodles/2017/abdul-sattar-edhis-89th-birthday-5757526734798848.3-hp.jpg');
        //request('http://cramfighter.com/static/img/icons/cramfighter_horizontal_w300.png').pipe(request.put('http://localhost:3000/img.png'));
        request('http://google.com', function(err, res, body) {  
            return body;
        });
    }
};