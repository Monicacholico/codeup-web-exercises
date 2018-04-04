(function() {
    "use strict";




    var elementOne = document.getElementById("one");
    console.log(elementOne.innerHTML);




    // var rowElements = document.getElementsByClassName("row")[0];
    //
    // rowElements.style["background-color"] = "#c6a59d";

    // function altrows(firstcolor, secondcolor){
        var rowElements = document.getElementsByClassName("row");
        for(var i = 0; i < rowElements.length; i++){
            if(i % 2 === 0){
                rowElements[i].style.backgroundColor = "#c6a59d";
            } else{
                rowElements[i].style.backgroundColor = "#808080";
            }
        }

    var listener = function (event) {
        tableCapezio.innerHTML = tableBloch;
    };
    var tableCapezio = document.getElementsByClassName("capezio");

        function unhide(tableCapezio){
        if(tableCapezio.className=(capezio === "hidden"){
        } document.getElementById('btn1').addEventListener('click', listener, false);
            tableCapezio.style.visibility = "visible";
        }
        unhide(tableCapezio);


    var tableBloch = document.getElementsByClassName("bloch");
    tableBloch.style.display="block";
    var listener = function (event) {
        tableBloch.innerHTML = tableCapezio.innerHTML;
    };
    document.getElementById('btn1').addEventListener('click', listener, false);


var articleElement = document.getElementsByTagName("article")[0];

articleElement.style.color = "gray";
articleElement.style["background-color"] = "#c6a59d";




// AIzaSyCL8LuyfD-k-yXPGU4QB4hnXdFL4XUF2Cs




























































































})();