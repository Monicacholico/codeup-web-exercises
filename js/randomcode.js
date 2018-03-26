"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// confirm("Would you like to enter a number");
// var numberIput = prompt("Enter your number");
//
//
// if (numberIput %2 = 0;) {
//     alert ("You choose an even number");
// } else if(numberIput === >100;){
//     alert ("Your number is greater than 100");
// } else if (prompt === >= 0;){
//     alert ("Your number is positive")
// } else if (prompt === <= -0;){
//     alert ("Your number is negative")
// } else{
//     alert("You're not entering a number")
// }
//
//
function oddNumber (myNumber){
    return (myNumber % 2) === 1;

}

console.log(oddNumber(2));




function isEven (evenNumber){
    return (evenNumber % 2) === 0;
}

console.log(isEven(5));

function isPositive (positiveNumber){
    return positiveNumber >= 0 === true;
}

console.log(isPositive(-9));