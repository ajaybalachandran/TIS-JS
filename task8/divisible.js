$(document).ready(function(){
    $.fn.divFunction = function(x,y){ 
        if(x%y===0){
            return x;
        }
        else{
            var r = x%y;
            var next = x + (y-r);
            return next;
        }
    }
    $("#id_check_btn").click(function(){
        var num1 = +$("#id_no1").val();
        var num2 = +$("#id_no2").val();
        res = $.fn.divFunction(num1, num2);
        $('#data').text(res);
    });

});
