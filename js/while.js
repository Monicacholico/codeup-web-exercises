"use strict";

var i = 1;

while (i < 65536) {
    i = i  * 2;
    console.log(i);
}

// ICE CREAM EXERCISES

var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5

// var allCones = 100;
// var stock = allCones - isForCones;


do {
    var isForCones = Math.floor(Math.random() * 5) + 1;
    allCones = (allCones - isForCones);
    if(isForCones < allCones){
        console.log("I sold " + isForCones);
    } else if (isForCones > allCones) {
        console.log("Sorry, I just have " + isForCones);
    } else {
        console.log("Yay! I sold all the cones");
    }
} while (allCones > 0);


// FOR LOOPS EXERCISE



// for (var i = a * 1, 1 <= 11; 1++) {
//
//     console.log ("This is multiplication table number" + i);
//     }

//
//     for (var i = 1, j = 1, i < 10; j < 10, j++){
//     console.log(i + "x" +  j + "=" + (i * j);)
//     }
// }



