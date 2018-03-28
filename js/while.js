"use strict";

// ================ FIRST EXERCISE OF LOOPS ==================

var i = 1;

while (i < 65536) {
    i = i  * 2;
    console.log(i);
}

// ================ ICE CREAM EXERCISES ======================

var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

// var allCones = 100;
// var stock = allCones - isForCones;


do {
    var isForCones = Math.floor(Math.random() * 5) + 1;
    allCones = (allCones - isForCones);
    if(isForCones < allCones){
        console.log("I sold " + isForCones);
    } else if (isForCones >= allCones) {
        console.log("Sorry, I just have " + isForCones);
    } else {

    }
} while (allCones > 0);

console.log("Yay! I sold all the cones");


