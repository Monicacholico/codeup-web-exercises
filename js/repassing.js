(function(){
"use strict"


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

// ========== ARRAYS ===================


// [] // an empty array
//
//     [1] // an array with one element
//
//     [1, 2, 3, 4, 5] // an array with 5 elements
//
//     ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
// notice that the array above does *not* have 5 elements, rather the last
// element is itself an array with 3 elements in it

    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

    console.log(shapes.length);

    var numbers = [1, 2, 3, 4];
    console.log(numbers[0]); // 1
    console.log(numbers[1]); // 2
    console.log(numbers[2]); // 3
    console.log(numbers[3]); // 4

    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

    console.log('There are ' + shapes.length + ' shapes in the array');

    console.log('The first shape is: ' + shapes[0]);
// The first shape is: square

    console.log('The second shape is: ' + shapes[1]);
// The second shape is: rectangle

    console.log('The third shape is: ' + shapes[2]);
// The third shape is: circle

    console.log('The fourth shape is: ' + shapes[3]);
// The fourth shape is: triangle

    console.log('The fifth shape is: ' + shapes[4]);
// The fifth shape is: undefined

// ============== ARRAYS AND FOR LOOPS ======================================
    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
    for (var i = 0; i < shapes.length; i++) {
        console.log('The shape at index ' + i + ' is: ' + shapes[i]);
    }

// ================ FOR EACH LOOP ============================================
    var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
    shapes.forEach(function(shape) {
        console.log('Here is a lovely shape: ' + shape + '.');
    });

// ================ OBJECTS ====================================
    var car = {};

    console.log(typeof car);

    //==========================

    var car = {};

// use dot notation to assign a "make" property
    car.make = "Toyota";

// use array notation to assign a "model" property
    car["model"] = "Camry";

// =============================
    var car = {
        make: "Toyota",
        model: "Camry"
    };
// =============================
    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// use array notation to access "make" property
    console.log("The car make is: " + car["make"]);

// use dot notation to access "model" property
    console.log("The car model is: " + car.model);

// ================ NESTED VALUES IN OBJECTS WITH FOR EACH FUNCTION ===================

    var cars = [
        {
            make: "Toyota",
            model: "Camry",
            features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
            owner: {
                name: "Jane Doe",
                age: 30
            }
        },
        {
            make: "Honda",
            model: "Accord",
            features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
            owner: {
                name: "John Doe",
                age: 31
            }
        }
    ];

    console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
    console.log("The owner of the second car is " + cars[1].owner.name + ".");

    console.log("Here are all the features of all the cars:");
    cars.forEach(function(car) {
        car.features.forEach(function(feature) {
            console.log(feature);
        });
    });

//    ================ FUNCTIONALITY TO AN OBJECT ===========================
    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a honk method on the car object
    car.honk = function () {
        alert("Honk! Honk!");
    };

// honk the horn
    car.honk();

// ================== THIS KEY WORD IN OBJECTS ===============================
    var car = {};
    car.make = "Toyota";
    car.model = "Camry";

// create a logMakeModel method on the car object
    car.logMakeModel = function () {
        console.log("Car make/model is: " + this.make + " " + this.model);
    };

// log the make/model
    car.logMakeModel();


})();