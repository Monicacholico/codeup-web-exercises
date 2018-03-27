// ================================= FUNCTIONS ========================


function myFunction(input) {
    var output = /* do something to calculate output */;
    return output;
}


// ================================ CONDITIONALS ======================
// ======================= IF =========================================

if (condition) {
    // code here gets executed if condition evaluates to true
} else {
    // code here gets executed if condition evaluates to false
}

// ======================= IF ELSE ====================================

var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');

if (weShouldDeleteStuff) {
    // delete all the things...
} else {
    alert("Operation Canceled!");
}


// ======================= IF ELSE IF =================================

var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}


// ======================= SWITCH =====================================

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

// ============================================== LOOPS ==============================================

// ========================= WHILE ================================

var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}


// ========================= DO WHILE =============================

do {
    //body
} while(/*condition*/);

var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);

// ========================= FOR LOOPS =============================

for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
}

for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}

// ========================= BREAK AND CONTINUE =====================

// ========= BREAK ===================

var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}

// ======== CONTINUE =================

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}


