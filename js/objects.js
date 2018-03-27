(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

  var name = {};
        name.firstName = "Monica";
        name.lastName = "Lopez";
        name.sayHello = function(){
            console.log("!Hi from " + name.firstName + name.lastName);
        };
        name.sayHello();
        // console.log(sayHello(this.firstName, this.lastName));


        var person = name;
        console.log(name);
        console.log(person.firstName);
        console.log(person.lastName);

        // DIFFERENT WAYS TO DO AN ARRAY
        //==================== ONE =================================
        // var person = {firstName: "Monica", lastName: "Lopez"};
        //
        //==================== TWO =================================
        // var person ={};
        //     person["firstName"] = "Monica";
        //     person["lastName"] = "Lopez";
        //
        // =================== THREE ===============================
        // var person ={};
        // person.firstName = "Monica";
        // person.lastName = "Lopez";

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log("The first shopper is : " + shoppers[0].name + " and the discount is $0.00");
    console.log("The second shopper is : " + shoppers[1].name + " and the discount is $30.00");
    console.log("The third shopper is : " + shoppers[2].name + " and the discount is $38.40");
    // var discount = shoppers.amount * .88;
    shoppers.forEach(function(shopper){
            if (shopper.amount >= 200) {
                console.log(shopper.name + " has a total amount of " + shopper.amount.toFixed(2) + " and a discount of " + (shopper.amount * .88).toFixed(2));
            }
        });

// =================== EXERCISE WITH A FOR LOOP =========================



    for(var i = 0; i < shoppers.length; i++){
        var total = shoppers[i].amount;
        var discount = 0;
        if (shoppers[i].amount > 200){
            total = (shoppers[i].amount * .88);
            discount = (shoppers[i].amount * .12);
        }
        console.log( shoppers[i].name + " bought $" + shoppers[i].amount.toFixed(2) + " , the discount is $" + discount.toFixed(2) + " and the total is $" + total.toFixed(2)
        )
    }

// ================ TO GENERATE THE CONSOLE.LOG MESSAGE AND USE IT IN THE FOOREACH LOOP ===============

// function generateTotalMessage(shopper){
//         if(shopper.amount > 200){
//             total = (shopper.amount * .88);
//             discount = shopper.amount * .12;
//         }
//         return shopper.name + " bought $" + shopper.amount.toFixed(2) +
//             ", the discount is $" + discount.toFixed(2) +
//             " and the total is $" + total.toFixed(2)
// }


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
            {Title: "The Fountainhead",
                Author: {
                    firstName: "Ayn",
                    lastName: "Rand"
                     }
                },
            // createBook("The Fountainhead", "Ayn", "Rand"),
            {Title: "Apollos'Angels",
                Author: {
                    firstName: "Jennifer",
                    lastName: "Homans"
                     }
                },
            // createBook("Apollo's Angels", "Jennifer", "Hoffman"),
            {Title: "The Handmaid's Tale",
                Author:{
                    firstName: "Margaret",
                    lastName: "Atwood"
                    }
                },
            // createBook("The Handmaid's Tale", "Margaret", "Atwood"),
            {Title: "Bad Feminist",
                Author:{
                    firstName: "Roxane",
                    lastName: "Gray"
                }
            },
            // createBook("Bad Feminist", "Roxane", "Gray"),
            {Title: "Javascript & Jquery",
                Author:{
                    firstName: "Jon",
                    lastName: "Duckett"
                }
            }
            // createBook("Javascript & Jquery", "Jon", "Duckett"),
    ];




    books.forEach(function(book, index){
        console.log("Book # " + index + "\n"  +
            "Title" + " " + book.Title + "\n " + "Author" + " "
            + book.Author.firstName + " " + book.Author.lastName);

    });



    //  =================== EXERCISE WITH A FOR LOOP (LUIS) ===========================

    // for (var i = 0; i < books.length; i++){
    //     console.log("Book # " + (i + 1));
    //     console.log("Title: " + books[i].title);
    //     console.log("Author: " + books[i].author.firstName + " " + books[i].lastName);
    // }
    //


    //  ======================= BONUS EXERCISE ========================================


    function createBook(title, firstName, lastName) {
        return books.push({title: title, author: {
                firstName: firstName,
                lastName: lastName
            }});
    }

    createBook("The second sex", "Simone",  "de Beauvoir");
    console.log(books);

    // ======================= BONUS EXERCISES WITH LUIS ======================


   //  function createBook (title, author){
   //      var name = author. split(" ");
   //      return {title: title, author: {
   //          firstName: name[0],
   //              lastName: name[1]
   //          }}
   //  }
   //
   //  function showBookInfo(book, index){
   //      console.log("Book # " + (index + 1));
   //      console.log("Title: " + book.title);
   //      console.log("Author: " + book.butho.firstName + " " + book.author.lastName);
   //  }
   //
   //  books.forEach(showBookInfo);
   //
   // // ==============  TO ADD OBJECTS ===========================
   //
   //  books.push(createBook("title", "author"));
   //
   //  // ================ TO REPLACE OBJECTS =====================
   //
   //
   //  books[i] = createBook("title", "author");
   //
    /**
     *
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


//    ====================================================================================================
// EXERCISE WITH JAMES


// function createBook(title, firstName, lastName) {
//     return books.push({title: title, author: {
//             firstName: firstName,
//             lastName: lastName
//         }});
// }
//
// createBook("The second sex", "Simone" ,  "de Beauvoir");
// console.log(books);
// ========================================================================================================
// EXERCISE WITH LUIS

// function createBook(newTitle, newAuthor) {
//     var book = {title: newTitle, author: newAuthor};
//
//     return book + {title: "The second sex", author: "Simone de Beauvoir"}
// }
// console.log("This is a new book: " + {title: "The second sex", author: "Simone de Beauvoir"});
//
// createBook("The second sex", "Simone de Beauvoir");

})();
