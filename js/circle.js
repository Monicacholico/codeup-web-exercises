(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,
        getArea: function () {
            return Math.PI * circle.radius * circle.radius;
        },


        // TODO: complete this method
        // hint: area = pi * radius^2

        // return;  TODO THE PROPER VALUE
        // },


        logInfo: function (doRounding) {
            // TODO: complete this method
            var Area = this.getArea();
            if (doRounding) {

                Area = Math.round(Area);
            }

            // doRo
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            console.log("Area of a circle with radius: " + this.radius + ", is: " + Area);
        }
    };

 // =========== EXAMPLES FROM LUIS ABOUT A FUNCTION AND A METHOD =======================
 // var object ={
 //     foo: function () {
 //     }
 // };
 //
 //    function foo() {
 //        this.bar = function (area) {
 //
 //        }
 //    }

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
