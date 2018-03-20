"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello (name){
    console.log("Hello " + name);
    return "Hello " + name;
}

sayHello("Codeup");

// var sayHello = "Monica";?



// sayHello("Monica");

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
var helloMessage = sayHello("Monica");

console.log(helloMessage);
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Monica";
 sayHello(myName);



// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function myNumberTwo(number){
    return number === 2;

}

console.log(myNumberTwo(3));

// function myNumberTwo (random){
//
// }
//
// console.log(myNumberTwo());

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tip, bill){

    return (tip * bill).toFixed(2);
}

console.log(calculateTip(" ", " "));


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// var tip = prompt ("How percentage you want to tip?");
// var bill = prompt ("How much is your bill?");
//
// alert ("Ok! the amount to tip is " + calculateTip( tip, bill));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount (originalPrice, discountPercent) {

    return (originalPrice - (originalPrice * discountPercent)).toFixed(2);
}

console.log(applyDiscount(100, .2));


//Exercises for March 20, Class

//Identity

function Identity(name){
    return name;

}

console.log(Identity ("Monica"));

//isOdd

function isOdd(randomNumber){
    return (randomNumber % 2) === 1 ;
}

console.log(isOdd(3));

// isEven

function isEven (evenNumber){
    return (evenNumber % 2) === 0;
}

console.log(isEven(5));

// isPositive

function isPositive (positiveNumber){
    return positiveNumber >= 0 === true;
}

console.log(isPositive(2));

//decrement

function decrement(minusNumber){
    return minusNumber -1;
}

console.log(decrement(6));

//hasSpace

function hasSpaces(anyString) {

    // return !anyString.length && !anyString.indexOf === -1;
    return anyString.indexOf(" ") > -1;
}

console.log(hasSpaces("Monica"));

//isFive

function isFive (anyNumber){
    return anyNumber === 5;
}

console.log(isFive(5));

//square

function square(multipledNumber){

    return multipledNumber * multipledNumber;

}

console.log(square(5));

//cube

function cube(potentialNumber){

    return ((potentialNumber * potentialNumber) *potentialNumber);
}

console.log(cube(5));

//half

function half(halfNumber){

    return halfNumber / 2;
}

console.log(half(8));

//double

function double(doubleNumber){

    return doubleNumber * 2;
}

console.log(double(40));

//isValidPassword

// function isValidPassword (username, password){
//
//     return ((username.length >= 5) && (username.length <= 20)  &&  (password = !username.indexOf(0,20))
//     && (!username.length (-1)) || (!password.length (-1)) === true;
// }
//
// console.log(isValidPassword("codeup", "notastrongpassword"));
//
//isRightTriangle

function isValidLogin(username, password) {

    var isPasswordLongEnough = password.length > 5;
    var isUsernameShortEnough = username.length < 20;
    var passwordIncludesUsername = password.indexOf(username) !== -1;
    var usernameHasWhitespace = username !== username.trim();
    var passwordHasWhitespace = password !== password.trim();

    // loose comparison == or !=
    // strict comp === or !==


    // var usernameHasWhitespace = username.length! = -1;
    // var passwordHasWhitespace = password.length! = -1;


    return (
        isPasswordLongEnough &&
        isUsernameShortEnough &&
        !passwordIncludesUsername &&
            !usernameHasWhitespace &&
            !passwordHasWhitespace
    );
}



// var a = 2 * 2;
// var b = 4 * 4;
// var c = 20 * 20;

    // function isRigthTable (a, b, c){
    // return a + b + c === 400;

}

function isRightTable1 (a, b, c) {
        return (a * a) + (b * b) + (c * c);
}


console.log(isRigthTable( , , ));


// Zach's Example has passowrd

    function stringContains(haystack, needle) {
        return  haystack.indexOf (needle) !== -1;
    }

    function hasWhitespace (string) {
        return stringConstains(string, " ");
    }


    function getNumber (){

        return parseFloat(prompt("Write a number"));
}