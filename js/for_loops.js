// Multiplication exercise

function showMultiplicationTable(number){

    for (var i = 1; i < 11; i++){
    console.log(i + " x " + number + " = " + (parseInt(number)) * i);
}
    return (parseInt(number)) * i;
}

showMultiplicationTable(5);

// Odd or Even exercise for loop

// var randomNumbers = Math.floor(Math.random() * 20) + 200;
// var isForCones = Math.floor(Math.random() * 5) + 1;

for (var i = Math.floor(Math.random() * 20) + 180; i < 200; i++){
    if(i % 2 === 0){
        console.log(i + " is an even number");
    } else{
        console.log(i + " is an odd number");
    }
}

// for (var i = 1; i < 10; i++) {
//     switch (i) {
//         case i = 1:
//             console.log ( =+i);
//         case i = 2:
//             (console.log ((2)i)))
//         case i = 4:
//             (console.log ((4)i)))
//         case i = 5:
//             (console.log ((5)i)))
//         case i = 6:
//             (console.log ((6)i)))
//         case i = 7:
//             (console.log ((7)i)))
//         case i = 8:
//             (console.log ((8)i)))
//         case i = 9:
//             (console.log ((9)i)))
//     }
// }

// Brian Exercise piramide


// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for(var i = 1; i <=9; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}



for (var i = 100; i > 0; i = i - 5){
    console.log(i);
}
//
//
// Break and Continue Exercise

for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log("Here's and odd number: " + i);
}