(function() {

    "use strict";

// ============== FIRST JQUERY EXERCISE =======================

$(document).ready(function() {
    alert( 'The DOM has finished loading!' );

});


// ======= SECOND JQUERY EXERCISE "SELECTORS" =====================
//
var content = $(".first-title").text();
    alert(content);

    $('.codeup').css('border', 'solid 1px red');

    $('li').css({
        'font-size': '20px',
        "list-style-tipe" : "circle"
    });

    $('li, p, h1').css('background-color', '#c6a59d');

    var content = $("h1").text();
    alert(content);

    alert($("h1").text());

    $("div").css("width", "600px");
    $("div").css("margin", "auto");
    $("*").css({
    "text-align": "justify",
    "margin": "auto",
    "padding": "10px"
    });


// ====== THIRD JQUERY EXERCISE "EVENTS" =====================

    $('h1').click(
        function() {
            $(this).css('background-color', '#c6a59d');
        }
    );

    $('p').dblclick(
        function() {
            $(this).css('font-size', '18px');
        }
    );

    $('li').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );

    function highlight(){
        $("p").css("background-color", "yellow");
       }

    $("#highlight").on("click", highlight);


var colors = ["pink", "green", "goldenrod", "papayawhip"];
var i = 0;
$("h2").hover(function(){
    $(this).css({
        "background-color": colors[i % colors.length],
        "cursor": "help"
    });
    i++;
});


































































})();