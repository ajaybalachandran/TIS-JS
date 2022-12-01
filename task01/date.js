
function dateCheck(){
    console.log('hi');
    var d1 = document.getElementById("id_date1").value
    var d2 = document.getElementById("id_date2").value
    const dateOne = new Date(d1)
    const dateTwo = new Date(d2)
    if(dateOne > dateTwo){
        document.getElementById('ans').innerHTML='true'
    }
    else if(dateOne < dateTwo){
        document.getElementById('ans').innerHTML='false'

    }

    else{
        document.getElementById('ans').innerHTML=''

    }
}