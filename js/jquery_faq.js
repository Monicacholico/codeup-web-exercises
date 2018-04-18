(function() {
    "use strict";


    $('dt').click(function () {
        $("dd").toggleClass("invisible");
        $(this).toggleClass("highlight");
    });


    $('.text').hide();
    $('.expander').click(function(){
        $('.text').slideToggle(500);
    });


    $('.expander').click(function(){
        $(this).parent().next().slideToggle(200);
    };


    $("#list-button").click(function () {
        $('li').each(function (index) {
            if (index % 4 === 0) {
                $(this).next().next().next().css('background-color', '#FF0');
            }
        });
    });

$("h3").click(function(){
    $("li").each(function(i){
        if(i % 4 === 0){
        $(this).css("font-weight", "bold");
        }
    })
    });

    // RYAN'S EXAMPLE

    // $("h3").click(function(){
    //
    // });

    $("li").click(function () {
        $("li").each(function (i) {
            if (i % 4 === 0) {
                $(this).css("color", "blue");
            }
        })
    });

    // =============== THIS IS RYAN'S EXAMPLE ======================
    //
    // $("li").click (function() {
    //     $(this).parent().children().first().css("color", "blue")
    //
    // };



    $("#swap-button1").click(function(){
        $("img").each(function(i){
            if(i === 0){
                $("img").first().animate({
                        marginLeft: "225px"},
                    500);
            }
            if(i === 1){
                $("#frame2").animate({
                        marginLeft: "-450px"},
                    500);
            }
            if( i === 2){
                $("img").last().animate({
                    marginLeft: "225px"},
                    500);
            }
        })
    });



    $("#swap-button2").click(function(){
        $("img").each(function(i){
            if(i === 1){
                $(this).animate({
                        marginRight: "250px"},
                    500);
            }
            if(i === 2){
                $("img").last().animate({
                        marginLeft: "-1175px"},
                    500);
            }
            if( i === 0){
                $("img").first().animate({
                        marginRight: "225px"},
                    500);
            }
        })
    });

    $("#swap-button3").click(function(){
        $("img").each(function(i){
            if( i === 2){
                $("img").last().animate({
                        marginLeft: "-1125px"},
                    500);
            }
            if(i === 0){
                $("img").first().animate({
                        marginRight: "225px"},
                    500);
            }
            if(i === 1){
                $("#frame2").animate({
                        marginRight: "225px"},
                    500);
            }

        })
    });

    // =========== THIS IS FOR THE H1 =======================

    $("span").click(function(){
        $("#first-div").hide();
        // $(this).hide();
    });


    //============== RYANS SOLUTION =======================

    // $("span").click(function(event){
    //     $(event.target).parent().hide();
    // });

    //============ THESE ARE THE FOR THE UL FACTS ============


    $("h3").first().click(function(){
        $("#yellowstone").toggle();
    });

    $("#seneca-falls").click(function(){
        $("#seneca").toggle();
    });

    $("h3").last().click(function(){
        $("#wrangell").toggle();
    });


    // ============ RYANS SOLUTION ======================

    // $("ul").hide();
    // $("h3").click(function(){
    //     $(this).next().slideToggle();
    // });


    // =========== THIS IS FOR THE H2 FADE IN ================


    $("#register").fadeIn(8000);


// ================= RYANS EXAMPLE =======================
//     setTimeout(function(){
//         $("#register").fadeIn();},
//         8000)


    // ============ TRYING TO DO SWAPPING IMAGES WITH TOGGLE ===========

    // $("#swap-button1").click(function(){
    //     $("img").first().animate({
    //             marginRight: "-225px"},
    //         500);
    // });
    //
    // $("#swap-button2").click(function(){
    //     $("#frame2").animate({
    //         width: "toggle"},
    //         500);
    // });
    //
    // $("#swap-button3").click(function(){
    //     $("img").last().replaceWith($("#frame1"))
    //     && $("img").next().animate({
    //             width:"toggle"});
    // })














})();