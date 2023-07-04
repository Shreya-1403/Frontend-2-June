var presentRow = null;

function OnSubmit(e) {
    event.preventDefault();
    var data = receivedData();
    if (presentRow === null) {
        insertData(data);
    }
    else {
        updateData(data);
    }
    resetData();
}
let idNo = 0;
//Receiving data from server
function receivedData() {
    var data = {};
    data[0] = idNo;
    idNo++;
    data["name"] = document.getElementById("name").value;
    data["email"] = document.getElementById("email").value;
    data["gpa"] = document.getElementById("gpa").value;
    data["age"] = document.getElementById("age").value;
    data["degree"] = document.getElementById("degree").value;
    return data;
}

//Insert row with data
function insertData(data) {
    var table = document.getElementById("tbl").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = idNo;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.name;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gpa;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    var cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.degree + "\t" + `<span class="options">
      <i onClick="OnEdit(this)" class="fas fa-edit"></i>
      <i onClick="OnDelete(this)" id="delete" class="fas fa-trash-alt"></i>
    </span>`;
}

//Search data


//Edit data


// Delete data

function OnDelete(td) {
    row = td.parentElement.parentElement;
    document.getElementById('tbody').deleteRow(row);
}

function resetData() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('gpa').value = '';
    document.getElementById('age').value = '';
    document.getElementById('degree').value = '';
}

