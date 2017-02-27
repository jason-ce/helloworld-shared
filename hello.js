'use strict';

exports.sayHello = function(){
    console.log("saying hello!");
    return "howdy!";
};

exports.Goodbye = class Goodbye{
    goodbye(){
        console.log("goodbye!");
        return "adios";    
    }
};
