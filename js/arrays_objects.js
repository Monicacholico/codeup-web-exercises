(function() {
    "use strict";

// ========================== ARRAYS =============================


    var pointeShoes = ["Bloch", "Capezio", "Grishko", "Sansha"];

    console.log(pointeShoes.length);
    console.log(pointeShoes[0]);
    console.log(pointeShoes[1]);
    console.log(pointeShoes[2]);
    console.log(pointeShoes[3]);

    for (var i = 0; i < pointeShoes.length; i++) ;
    console.log("These are the pointe shoes in this array: " + pointeShoes)


    pointeShoes.forEach(function (pointeShoe, index) {

        console.log(pointeShoe, index);

    });

    pointeShoes.forEach(showPointe);


    function showPointe(pointeShoe, index, array) {
        console.log(pointeShoe);
        console.log(index);
        console.log(array);

    }


    pointeShoes.forEach(function (pointeShoe, index) {

        console.log("These is one of the pointe shoes: " + pointeShoe + " and its index: " + index);
    });


    function first(array) {
        return array[0];

    }

    console.log(first(pointeShoes));

    function second(array) {
        return array[1];
    }

    console.log(second(pointeShoes));

    function third(array) {
        return array[2];
    }

    console.log(third(pointeShoes));

    function fourth(array) {
        return array[3];

    }

    console.log(fourth(pointeShoes));

    function last(array) {
        return array[pointeShoes.length - 1];
    }

    console.log(last(pointeShoes));

    /* ??????????????????????????????????????????????????????????????
    preguntar como agregar el nombre del nuevo element (pointeShoe) al console.log
    y porque no agrega la punta poniendola solo en el return, sino que tiene que estar en el console.log
    para que se agregue
     */


    function addPointe(pointeShoe) {
        return pointeShoes.push("Freed", "Chacott");
    }

    addPointe();
    console.log("The complete array with the added pointe shoe turns as: " + pointeShoes);
    // "Adding a new pointe shoe to the array: " + addPointe("Chacott") +
    console.log(pointeShoes);

    pointeShoes.sort();
    console.log(pointeShoes);

    var pointeStrings = pointeShoes.join(",");
    console.log(pointeStrings);
    console.log(pointeShoes);

// ======================= OBJECTS ==============================
//    Trying to convert arrays in objects

    // pointeShoes.forEach(function (pointeShoe) {
    //
    //     function convertPointeToObjects() {
    //         var pointeBrands = pointeShoes[1].split(" ");
    //         return {
    //             pointeName: pointeBrands,
    //         }
    //     }
    //
    //     console.log(convertPointeToObjects());
    //     return pointeShoe;
    //
    // });
    // console.log("The pointeshoes in the array now are objects in: " + pointeBrands);
    //

    var pointeBrands = [
        {
            pointeName: "Bloch",
            feet: {
                Egiptian: "Alpha",
                Giselle: "Balance",
                Greek: "Sonata"
            }
        },
        {
            pointeName: "Capezio",
            feet: {
                Egiptian: "Airess Tappered",
                Giselle: "Giselle",
                Greek: "Cambre"
            }
        },
        {
            pointeName: "Grishko",
            feet: {
                Egiptian: "Ulanova",
                Giselle: "Elite",
                Greek: "2007"
            }
        },
        {
            pointeName: "Sansha",
            feet: {
                Egiptian: "Ovation",
                Giselle: "Recital",
                Greek: "Lyrica"
            }
        }
    ];
    //this is the same function that above commented, but I put it here because it appeared as undefined,
    //now at the bottom appears as [object, Object]

    pointeShoes.forEach(function (pointeShoe) {

        function convertPointeToObjects() {
            var pointeBrands = pointeShoes[1].split(" ");
            return {
                pointeName: pointeBrands,
            }
        }

        console.log(convertPointeToObjects());
        return pointeShoe;

    });
    console.log("The pointeshoes in the array now are objects in: " + pointeBrands);


// pointeBrands.forEach(function(pointeName, index){
//     return pointeName;
// });
// console.log("These are the models of the " + pointeBrands + " : " + pointeBrands.pointeName.feet + " " + index);

    pointeBrands.forEach(function (pointeBrand, index) {
        console.log("pointeBrand # " + index + "\n" +
            "Pointe Brand" + " " + pointeBrand.pointeName + "\n " + "Model" + " "
            + pointeBrand.pointeName.feet);

    });


// ============== BONUS EXERCISE ===========================

    var expenses = [
        {itemName: "macbook pro", cost: "$2,400"},
        {itemName: "raspberry pi", cost: "$60"},
        {itemName: "Dell XPS laptop", cost: "$1,200"}


    ];

    function noSigns(input) {
        // input = parseFloat(input);
        var first = input.replace("$", "");
        var second = first.replace(",", "");

        // console.log("this is the result " + second);

        return second;
    }

    // }noSigns(expenses[0].cost);


    expenses.forEach(function(expense){
    expense.cost = noSigns(expense.cost);
    var total = 0;
    total += parseFloat(noSigns(expense.cost));
    var avg = total / expense.cost.length;

    console.log("this are the expenses with no signs: " + expense.cost + " and this is the average of all costs " + avg);
    });








    // expenses.forEach(function(expense){
    //     var costString;
    //     if(expense.cost.indexOf("$") === 0){
    //         costString = expense.cost.slice(1);
    //     }
    //     var costNumber;
    //     costNumber = parseFloat(costString);
    //     if(costString.indexOf(",") === 1){
    //         costNumber = costString.replace(",", "");
    //     } else{
    //         costNumber = costString;
    //     }
    //     console.log(costString, costNumber);
    //
    //     var total = 0;
    //     for (var i = 0; i < costNumber.length; i++){
    //         total += costNumber[i];
    //     }
    //     var avg = total / costNumber.length;
    //     console.log("this is the average cost: " + avg);

        // =========== forEach function to take off $ and comma ==============

    // expenses.forEach(function(expense){
    //     var costString;
    //     if(expense.cost.indexOf("$") === 0){
    //         costString = expense.cost.slice(1);
    //     }
    //     var costNumber;
    //     costNumber = parseFloat(costString);
    //     if(costString.indexOf(",") === 1){
    //         costNumber = costString.replace(",", "");
    //     } else{
    //         costNumber = costString;
    //     }
    //     console.log(costString, costNumber);

        // ============ No funciona =========================
        // total += costNumber;
        // var avg = total / costNumber.length;
        // // var avgOfTotal = parseInt(avg);

        // console.log( avg);
        // expenses.forEach(function(sumAllExpenses){
        //     expense.cost = costNumber(expense.cost);
        // })
    // });


    // ============ two different functions for each $ , ============

    // function convertToNumber(input){
    //     var costString;
    //     if(input.indexOf("$") === 0){
    //         costString = input.slice(1);
    //     } return costString;
    // }console.log(convertToNumber("$1,5000"));
    //
    // function takeComa(input){
    //     var noComa;
    //     if(input.includes(",")){
    //         noComa = input.replace(",","");
    //         return noComa;
    //     } else{
    //     }return input;
    // }console.log(takeComa("1,500"));
    //


    // expenses.forEach(function(expense){
    //     convertToNumber(takeComa(expense.cost));
    //     console.log(expense.cost[0]);
    // })
    //


    // function sumAllExpenses(){
    //     var total = 0;
    //     for (var i = 0; (i < (costNumber.length)); i++);
    //     total += costNumber[i];
    //     var avg = total / costNumber.length;
    //     console.log(avg);
    // } return sumAllExpenses(expenses.cost)




// function sumAllExpenses () {}
// function getAverageExpense() {}



































































})();