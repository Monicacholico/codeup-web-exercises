// ============================== FOOR LOOPS =============================
// ============== MULTIPLICATION TABLE EXERCISE ==========================

function showMultiplicationTable(number){
    var i;
    for (i = 1; i < 11; i++){
    console.log(i + " x " + number + " = " + (parseInt(number)) * i);
}
    return (parseInt(number)) * i;
}

showMultiplicationTable(5);



// ======= ODD OR EVEN EXERCISE WITH FOR LOOP ======================

// var randomNumbers = Math.floor(Math.random() * 20) + 200;
// var isForCones = Math.floor(Math.random() * 5) + 1;

for (var i = Math.floor(Math.random() * 20) + 180; i < 200; i++){
    if(i % 2 === 0){
        console.log(i + " is an even number");
    } else{
        console.log(i + " is an odd number");
    }
}



// ======== PIRAMIDE EXERCISE ===================


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

// ========== DESCENDING MULTIPLES OF 5 FROM 100 TO 0


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