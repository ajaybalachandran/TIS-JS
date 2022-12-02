$(document).ready(function(){
    $.fn.splitFunction = function(num1){
        console.log(num1.split(""));
        $('#data').text(num1.split(""))
    }
    $("#submit_btn").click(function(){
        var num = $("#ip_num").val();
        $.fn.splitFunction(num)
    });
});

