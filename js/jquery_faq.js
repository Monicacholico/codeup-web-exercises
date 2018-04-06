(function() {
"use strict";


$('dt').click(function() {
    $("dd").toggleClass("invisible");
    $(this).toggleClass("highlight");
});


    $( "p" ).click(function() {
        $( this ).toggleClass( "highlight" );
    });



})();