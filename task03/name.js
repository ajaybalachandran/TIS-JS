function getMiddleName(){
    document.getElementById('data').innerHTML='<input type="text" placeholder="Middle Name" id="id_mname">';
}
function getfullname(){
    var firstName = document.getElementById('id_fname').value;
    var lastName = document.getElementById('id_lname').value;
    try{
        var middleName = document.getElementById('id_mname').value;
        document.getElementById('fullname').innerHTML=`${firstName} ${middleName} ${lastName}`
    }
    catch{
        document.getElementById('fullname').innerHTML=`${firstName} ${lastName}`
 
    }
    
}