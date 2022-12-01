function generateTable(){

    var empName = document.getElementById('emp_name').value;
    var empAge = document.getElementById('emp_age').value;
    var empDept = document.getElementById('department').value;
    var empSal = document.getElementById('salary').value;

    var table = document.createElement('TABLE');
    table.setAttribute('id', 'emp_table');
    document.body.appendChild(table);

    var len = document.getElementById("emp_table").rows.length;
    if(len===0){
        var table = document.getElementById("emp_table");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = "Name";
        cell2.innerHTML = "Age";
        cell3.innerHTML = "Department";
        cell4.innerHTML = "Salary";

        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = `${empName}`;
        cell2.innerHTML = `${empAge}`;
        cell3.innerHTML = `${empDept}`;
        cell4.innerHTML = `${empSal}`;
    }
    
    else{
        var table = document.getElementById("emp_table");
        var row = table.insertRow(len);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = `${empName}`;
        cell2.innerHTML = `${empAge}`;
        cell3.innerHTML = `${empDept}`;
        cell4.innerHTML = `${empSal}`;
    }

   

}