"use strict";

var i = 1;

while (i < 65536) {
    i = i  * 2;
    console.log(i);
}

// ICECREAM EXERCISES

var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var isForCones = Math.floor(Math.random() * 5) + 1;

// do{
//     console.log(" = );
//
//
// }


// var i = 1;
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

// do {
//     console.log(stopSelling);
//
// } while (stopSelling = allCones);


//
//
// do {
//     console.log("We have " + allCones);
//     allCones aler( );

// var i = allCones;

 do {
     // console.log("I have " + allCones);
     console.log("I sold" + allCones);
     if (isForCones <= 5){
         console.log(isForCones + " cones sold");
     } else if (isForCones === 5){
             console.log("sorry, I only have " + isForCones );
     } else{
             console.log("Yay, I sold them all ")
         }
     } while (allCones > 0);

// FOR LOOPS EXERCISE

