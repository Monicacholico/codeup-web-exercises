"use strict";

// Code here

// ====================== FIRST EXERCISES ================================

console.log("Hello from external JavaScript");

alert("Welcome to my website");

var color = prompt("What's your favorite color?");

alert(" Wow, " + color + " is my favorite color too!!!" );


// ================= EXERCISE 1 =====================================

var littleMermaid = prompt("How many days do you have Little Mermaid?");

var brotherBear = prompt("How many days do you have Brother Bear?");

var hercules = prompt("How many days do you have Hercules?");

var total = (littleMermaid * 3) + (brotherBear * 3) + (hercules * 3);

alert("Ok! your total is  $" + total);


//===================== EXERCISE 2 ==================================

var Google = prompt("How many hours did you work for Google");
var Amazon = prompt("How many hours did you work for Amazon");
var Facebook = prompt("How many hours did you work for Facebook");

var total = Google * 400 + Amazon * 380 + Facebook * 350;

alert("0k, then you'll total to be paid is " + "$" + total);

//===================== EXERCISE 3 ====================================

var classSpots = prompt("Is there any spot available at this class?");


var freeSchedule = prompt("Do you have available schedule for this class?");


var enrolled = classSpots && freeSchedule;


alert("Ok, you are enrolled now");



// ============================= ZACHS' SOLUTIONS IN CLASS ==========================

// Zach var classSpots = prompt("Is the class full?") ==="yes";
//Zach var freeSchedule = prompt("Are there any schedule conflicts?") == "yes";

//Zach var canEnroll = !classSpots && !freeSchedule;

// var yesFreeSpots = True;
// var yesFreeSchedule = True;
// var noSpots = False;
// var noFreeSchedule = False;

//Zach alert("Able to enroll: " + canEnroll);

// var enrolled = classSpots && freeSchedule = true;
// var notEnrolled = classSpots && freeSchedule = false;
//
//  if (enrolled) {
//      alert("Great! Now you are enrolled");
//  }
// else {
//     alert("Sorry, you can't be enrolled");
// }

// ==================== EXERCISE 4 ===============================
var itemsBought = prompt("How many items are you buying?");
var offerValid = prompt("Is the offer expired?");
var premiumMembership = prompt("Are you a premium member?");

var offerApplied = itemsBought >=2 && offerValid || offerValid && premiumMembership;


alert("The offer has been applied");

// // ======================== EXERCISE ZACH'S SOLUTION ================================
// var itemsBought = parseInt(promp("How many items were bought?"));
// var isOfferValid = parseInt(promp("Is the offer valid?")) == "yes";
// var isPremiumMember = parseInt(promp("Are you a premium member?")) =="yes";
//
// var shouldApplyOffer = (intemsBought >2 && isOfferValid) || isPremiumMember;
//
// alert("Offer aplies: " + shouldApplyOffer);


