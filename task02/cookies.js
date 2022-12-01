function createCookie(){
    const name =  document.getElementById('id_name').value
    const age = document.getElementById('id_age').value
    document.cookie = `username=${name}, age=${age};expires=Thu, 2 Dec 2022 02:00:00 UTC; path=/`;

}

function getCookie(){
    var cookie =  document.cookie;
    if(cookie){
        document.getElementById('data').innerHTML=`${cookie}`
    }
    else{
        document.getElementById('data').innerHTML= 'no cookies to display'
    }
}


function deleteCookie() {
    var cookies = document.cookie.split(";");

    document.cookie = "username=,age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById('data').innerHTML= 'cleared'

    
}

