var result = " "

//using replace
function firstMethod(){
    var first = document.getElementById('id_first').value
    var second = document.getElementById('id_second').value 
    var third = document.getElementById('id_third').value
    document.getElementById('data').innerHTML=`${result.replace("",first)} ${result.replace("",second)} ${result.replace("",third)}`
    
}

//using split
function secondMethod(){
    var first = document.getElementById('id_first').value
    var second = document.getElementById('id_second').value 
    var third = document.getElementById('id_third').value
    res =  (first+" "+second+ " "+third).split(",")
    document.getElementById('data').innerHTML= `${res}`
}

//using slice
function thirdMethod(){
    var first = document.getElementById('id_first').value
    var second = document.getElementById('id_second').value 
    var third = document.getElementById('id_third').value
    res =  first.slice(0, (first.length))+" "+second.slice(0, (second.length))+" "+third.slice(0, (third.length))
    document.getElementById('data').innerHTML= `${res}`
}