

$(document).ready(function(){
    $("#id_selectbox").change(function () { 
        var data = $( "#id_selectbox option:selected" ).text();
        console.log(data);
        if(data==="select"){
            $("#square").css("background-color", "white");
 
        }
        else{
            $("#square").css("background-color", `${data}`);

        }
        
    });


    // $("#red_circle").mouseenter(function () { 
    //     $("#red_circle").css("background-color", "green");
    // });
    // $("#red_circle").mouseleave(function () { 
    //     $("#red_circle").css("background-color", "red");
    // });
});
