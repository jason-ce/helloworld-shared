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
            //let url = "http://localhost:8000/study-schedule/api/v2/overview/?today=2017-03-06";
            request(url, function (err, res, body) {
                callback(body);
                //console.log(body);           
            });
        }

        // getJSON2(callback) {
        //     var request = new Request('http://localhost:8000');

        //     fetch("", {mode:'no-cors'})
        //         .then(function (response) {
        //             if (!response.ok) {
        //                 throw Error(response.statusText);
        //             }
        //             return response;
        //         }).then(function (response) {
        //             console.log("ok");
        //         }).catch(function (error) {
        //             console.log(error);
        //         });
        // }
    };