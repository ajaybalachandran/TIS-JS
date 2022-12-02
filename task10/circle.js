$(document).ready(function(){
    $("#red_circle").mouseenter(function () { 
        $("#red_circle").css("background-color", "green");
    });
    $("#red_circle").mouseleave(function () { 
        $("#red_circle").css("background-color", "red");
    });
});


