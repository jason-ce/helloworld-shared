'use strict';

exports.add_two = function(x){
    console.log("add_two to " + x);
    return x + 2;
};

exports.string_ops = class StringOperations{
    appendGoodbye(input){
        console.log("appending Goodbye to " + input);
        return input + " Goodbye!";    
    }

    countEvenChars(input){
        if (input.length % 2 == 0){
            return input.length / 2;
        }
        else{
            return (input.length -1) / 2;
        }
    }

};

