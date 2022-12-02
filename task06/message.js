function showMessage(){
    if(document.cookie.length===0){
        document.getElementById('data').innerHTML='Helo Welcome to website';
        document.cookie='user=user1';
    }
    
}
function clearMessage(){
    document.getElementById('data').innerHTML=''
}