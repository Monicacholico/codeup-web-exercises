"use strict";
(function() {
    /**
     * // confirm ("Would you like to enter a number");
     // let userInput = prompt("Ok! Enter a number!");
     //
     // if (userInput %2 = 0){
//     alert ("Hey you chose an even number");
// } else if (userInput %2 ! = 0){
//     alert ("Hey you entered an odd number");
// } else if (userInput = < 100){
//     alert("You entered a number greater than 100");
// } else {
//     alert("You are not entering a number");
// }
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

confirm("Would you like to enter a number?");

var userEntry = prompt("Ok then, enter a number");
var plusOneHundred = parseInt(userEntry) + 100;



if (userEntry % 2 === 0 && userEntry >= 0) {
    alert("Hey your number is even");
    alert("Your number + 100 is: " + plusOneHundred);
    alert("Your number is positive");
} else if (userEntry % 2 === 1 && userEntry >= 0) {
    alert("Hey you entered an odd number");
    alert("Your number + 100 is: " + plusOneHundred)
    alert("Your number is positive");
} else if(userEntry % 2 === 0  && userEntry < 0 ) {
    alert("Your number entered is an even number");
    alert("Your number + 100 is: " + plusOneHundred);
    alert("Hey your number is negative");
} else if(userEntry % 2 === 1 && userEntry < 0 ) {
    alert("Hey your number is even");
    alert("Your number + 100 is: " + plusOneHundred);
    alert("Hey your number is negative");
}
else {
    alert("Hey you're not entering a number");
}
//
// function inpuNumber(message){
//     var input = prompt(message);
//     var number = parseInt(input);
//     return number;
// }
//
// // Function for even or odd numbers
//
// function isEvenOrOdd(number){
//     if (number % 2 === 0){
//         return number + "is even";
//     } else{
//         return number + "is odd";
//     }
// }
//
// function addOneHundred(){
//
//     alert(number)
// }


    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message that related to that
     * color. Only worry about the colors defined above, if the color passed is not
     * one of the ones defined above, return a message that says so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

//     Don't change the next two lines! These lines create two variables for you -`colors`: a list of the
//     colors of the rainbow  - `randomColor` : contains a single random color value from the list(this will contain
//     a different color everytime the page loads
// )
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];



if(randomColor === "blue"){
    alert("blue is the color of the Sky");
} else if(randomColor === "red"){
    alert("apples are red");
} else if(randomColor === "yellow"){
    alert("bananas are yellow");
} else if(randomColor === "orange"){
    alert("Austin's sunsets are orange")
} else if(randomColor === "green"){
    alert("Grass is green");
} else{
    alert("I don't know anything about that color");
}

   // WITH FUNCTION

    function analyzeColor(color) {

        if (color === "blue") {
            return "blue is the color of the sky";
        } else if (color === "red") {
            return "Strawberies are red";
        } else if (color === "orange") {
            return "Orange is orange";
        } else if (color === "yellow") {
            return "Bananas are yellow";
        } else if (color === "green") {
            return "Bananas are not green";
        } else if (color === "indigo") {
            return "Indigo is ink";
        } else if (color === "violet") {
            return "Violet is violet";
        } else {
            return "I don't know anything about" + color;
        }
    }

    console.log(analyzeColor(randomColor));
    alert(analyzeColor(randomColor));
    document.write(analyzeColor(randomColor));

    /**
     * TODO:
     * Pass the `randomColor` variable to your function and console.log the results.
     * You should see a different message everytime you refresh the page
     */

    /**
     * TODO:
     * Refactor your above function to use a switch-case statement
     */

    // WITH SWITCH

switch(analyzeColor) {
    case "blue":
        alert("blue is the color of the Sky");
        break;
    case "red":
        alert("apples are red");
        break;
    case "yellow":
        alert("bananas are yellow");
        break;
    case "orange":
        alert("Austin's sunsets are orange");
        break;
    case "green":
        alert("Grass is green");
        break;
    default:
        alert("I don't know anything about that color");
        break;
}
    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * all for free!.
     *
     * Write a function named `calculateTotal` that accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
        // thi is the one Luis explained to me and it works :)
// var luckyNumber = luckyNumber <= 5;
// var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmount = 500;
//
//
// console.log(luckyNumber, calculateTotal(luckyNumber, totalAmount));
//
//
// function calculateTotal(luckyNumber, totalAmount) {
//
//     var discount = 0;
//
//     if(luckyNumber === 0){
//         discount = 0;
//     } else if (luckyNumber === 1){
//         discount = .10 * totalAmount;
//     } else if (luckyNumber === 2){
//         discount = .20 * totalAmount;
//     } else if (luckyNumber === 3){
//         discount = .35 * totalAmount;
//     } else if (luckyNumber === 4){
//         discount = .50 * totalAmount;
//     } else{
//         discount = totalAmount;
//     }
//
//
//     var discountApplied = totalAmount - discount; // 100 - 3
//
//     return discountApplied;
//
// }
//
// console.log(calculateTotal(2,100));


/// / SECOND TRY
//     if (luckyNumber === 0){
//         calculateTotal(0, 100); parseInt("totalAmount" - 0);
//     } else if (luckyNumber === 1){
//         calculateTotal(1, 100); parseInt("totalAmount" - .10);
//     } else if (luckyNumber === 2){
//         calculateTotal(2, 100); parseInt("totalAmount" - .25);
//     } else if (luckyNumber === 3){
//         calculateTotal(3, 100); parseInt("totalAmount" - .35);
//     } else if (luckyNumber === 4){
//         calculateTotal(4, 100); parseInt("totalAmount" - .50);
//     } else{
//         calculateTotal(5, 100); parseInt("totalAmount" - 1);
//         }


// THIRD TRY

        // if (luckyNumber === 0){
        //     parseInt(discountApplied);
        // } else if (luckyNumber === 1){
        //      parseInt(discountApplied);
        // } else if (luckyNumber === 2){
        //      parseInt(discountApplied);
        // } else if (luckyNumber === 3){
        //      parseInt(discountApplied);
        // } else if (luckyNumber === 4){
        //      parseInt(discountApplied);
        // } else{
        //      parseInt(discountApplied);
        //     }

// FOURTH TRY

// function calculateTotal(luckyNumber, totalAmount){
//     return discountApplied
// }
//
// console.log(calculateTotal(luckyNumber, totalAmount));
//
//
//
// if(luckyNumber === 1 && totalAmount > 0){
//      discountApplied = (luckyNumber)
// }
//
// var is
// var discountTen = totalAmount - .10;
// var discount25 = totalAmount - .25;
// var discount35 = totalAmount - .35;
// var discount50 = totalAmount - .50;


    // var luckyNumber = Number(prompt("For a discount choose a number between 0 and 5"));
    var totalAmount = prompt("Whats your bill total?")

    var discount = 0;

    console.log(luckyNumber, calculateTotal(luckyNumber, totalAmount));


    function calculateTotal(luckyNumber, totalAmount) {


        if (luckyNumber === 0) {
            discount = 0;
            // alert ("Sorry you get 0 discount");
        } else if (luckyNumber === 1) {
            discount = .10 * totalAmount;
        } else if (luckyNumber === 2) {
            discount = .25 * totalAmount;
        } else if (luckyNumber === 3) {
            discount = .35 * totalAmount;
        } else if (luckyNumber === 4) {
            discount = .50 * totalAmount;
        } else {
            discount = totalAmount;

        }

        var discountApplied = totalAmount - discount; // 100 - 3

        // return discountApplied;
        return alert("You get a discount of " + discount + "% from your total of " + totalAmount + " , your final total is: " + discountApplied);

    }

    calculateTotal(luckyNumber, totalAmount);


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 6.
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

})();