"use strict";
//
// // EXERCISE ONE CONDITIONALS
//
// confirm("Do you want to enter a number?");
// var number = prompt ("Enter a number");
//
// if (typeof number === "number"){
//     alert("Your not entering a number");
// }
//
// if(parseInt(number) % 2 === 0){
//     alert("Your number is even");
// } else{
//     alert("Your number is odd");
// }
//
// alert("Your number + 100 is: " + (parseInt(number) + 100));
//
// if(parseInt(number) >= 0){
//     alert("Your number is positive");
// } else{
//     alert("Your number is negative");
// }
//
// function evenOdd(number){
//     if(parseInt(number) % 2 === 0){
//         return number + " is even";
//     }
//     return number + " is odd";
// }
//
// function plusOneHundred(number){
//     return "Your number + 100 is " + (parseInt(number) + 100);
// }
//
// function positiveNegative(number){
//     if(parseInt(number) >=0){
//         return number + " is positive";
//     } else{
//         return number + " is negative";
//     }
// }
//
// function Exerciseone(number){
//     if(evenOdd(number)){
//         document.write(evenOdd(number) + "<br>");
//         console.log(evenOdd(number));
//         alert(evenOdd(number));
//         document.write(plusOneHundred(number) + "<br>");
//         console.log(plusOneHundred(number));
//         alert(plusOneHundred(number));
//         document.write(positiveNegative(number) + "<br>");
//         console.log(positiveNegative(number));
//         alert(positiveNegative(number));
//     }
// }
//
// Exerciseone(number);
//
//
// // EXERCISE TWO CONDITIONALS
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(randonColor){
//     if(randomColor === "red"){
//         console.log("apples are red");
//     } else if(randomColor === "orange"){
//         console.log("oranges are orange");
//     } else if(randomColor === "yellow"){
//         console.log("chickens are yellow");
//     } else if(randomColor === "green"){
//         console.log("grass is green");
//     }else if(randomColor === "blue"){
//         console.log("ocean is blue");
//     }else{
//         console.log("I don't know anything about that color")
//     }
//     return(randomColor);
// }
// analyzeColor(randomColor);
//
//
// // EXERCISE SWITCH
//
// function isaColor(randomColor){
//
// switch(randomColor){
//     case "red":
//         return "Kitri's tutus are red";
//     case "orange":
//         return "Austin's sunsets are orange";
//     case "yellow":
//         return "maracuyas are yellow";
//     case "green":
//         return "Esmeralda's tutus are green";
//     case "blue":
//         return "Blue's bird custome is blue";
//     default:
//         return "I don't know anything about that color"
//     }
// }
// isaColor(randomColor);
//
// // WALMART EXERCISE
//
//
// var luckyNumber = Math.floor(Math.random() * 6);
// var billTotal = prompt("What's the total of your bill?");
// alert("Your lucky number is " + luckyNumber);
//
// function calculateTotal(luckyNumber, billTotal) {
//
//     switch (luckyNumber) {
//         case 0:
//             return billTotal;
//         case 1:
//             return billTotal - (billTotal * .1);
//         case 2:
//             return billTotal * .75;
//         case 3:
//             return billTotal * .65;
//         case 4:
//             return billTotal * .5;
//         case 5:
//             return 0;
//     }
//     return luckyNumber + billTotal;
// }
//
// alert("Your final total is: " + (calculateTotal(luckyNumber, billTotal)));
//
//
// // WHILE LOOP EXERCISES
//
// var isTwoTimes = 2;
// while(isTwoTimes < 65536){
//     console.log(isTwoTimes *= 2);
// }
//
//
//
// // // TRYING B O N U S L O O P S
//
// for( var i = 99; i >=1; i-=1){
//     console.log(i + " beer bottles standing on the wall");
// if(i <= 99 && i >= 2){
//     console.log(i + " beer bottles standing on the wall, but one beer bottle is falling from the wall");
// } else if( i === 1){
//     console.log (i + " beer bottle standing on the wall");
//     }
// }
// console.log("There's no more beer bottles left" );
//
//
// function multiplicationTable(number){
//     for(var i = 1; i <=10; i++){
//         console.log(number + "x" + i + "=" + parseInt(number) * i);
//     }
//     return (parseInt(number)) * 1;
// }
// multiplicationTable(8);


function isReverse(number){
    number = number.toString();
    return number.split("").reverse().join("");
}
console.log(isReverse(98765));

function isPalindrome(input){
    input = input.toString && input.toLowerCase();
    return input.split("").reverse().joing("");
}
console.log(isPalindrome(ana));