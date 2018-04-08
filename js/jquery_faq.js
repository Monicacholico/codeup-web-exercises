(function() {
"use strict";


$('dt').click(function() {
    $("dd").toggleClass("invisible");
    $(this).toggleClass("highlight");
});




// $('.text').hide();
// $('.expander').click(function(){
//     $('.text').slideToggle(500);
// });


// $('.expander').click(function(){
//     $(this).parent().next().slideToggle(200);
// };


$("button").click(function(){
    $('li').each(function(index){
        if (index % 4 ===0 ) {
            $(this).next().next().next().css('background-color', '#FF0');
        }
    });
});
















})();