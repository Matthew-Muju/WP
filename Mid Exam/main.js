
// dropdown prodi value 1
function random_function()
{
    var a=document.getElementById("Fakultas").value;
    if(a=="PascaSarjana")
    {
      var arr=["Magister Manajemen","Magister Teologi"];
    }
    else if(a=="Fakultas Filsafat")
    {
      var arr=["Ilmu Filsafat"];
    }
    else if(a=="Fakultas Keguruan Dan Ilmu Pendidikan"){
      var arr=["Pendidikan Agama","Pendidikan Bahasa Inggris","Pendidikan Ekonomi","Pendidikan Luar Sekolah"];
    }
    else if(a=="Fakultas Ekonomi Dan Bisnis"){
      var arr=["Akuntansi","Manajemen"];
    }
    else if(a=="Fakultas Pertanian"){
      var arr=["Agroteknologi"];
    }
    else if(a=="Fakultas Ilmu Komputer"){
      var arr=["Informatika","Sistem Informasi"];
    }
    else if(a=="Fakultas Keperawatan"){
      var arr=["Profesi Ners","Keperawatan"];
    }
    else if(a=="Akademi Sekretari Manajemen Indonesia Klabat"){
      var arr=["Sekretari (D3)"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("Prodi").innerHTML=string;
  }

// dropdown prodi value 2
function random_function2()
{
    var a=document.getElementById("FakultasFilter").value;
    if(a=="PascaSarjana")
    {
      var arr=["Magister Manajemen","Magister Teologi"];
    }
    else if(a=="Fakultas Filsafat")
    {
      var arr=["Ilmu Filsafat"];
    }
    else if(a=="Fakultas Keguruan Dan Ilmu Pendidikan"){
      var arr=["Pendidikan Agama","Pendidikan Bahasa Inggris","Pendidikan Ekonomi","Pendidikan Luar Sekolah"];
    }
    else if(a=="Fakultas Ekonomi Dan Bisnis"){
      var arr=["Akuntansi","Manajemen"];
    }
    else if(a=="Fakultas Pertanian"){
      var arr=["Agroteknologi"];
    }
    else if(a=="Fakultas Ilmu Komputer"){
      var arr=["Informatika","Sistem Informasi"];
    }
    else if(a=="Fakultas Keperawatan"){
      var arr=["Profesi Ners","Keperawatan"];
    }
    else if(a=="Akademi Sekretari Manajemen Indonesia Klabat"){
      var arr=["Sekretari (D3)"];
    }
 
    var string="";
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("ProdiFilter").innerHTML=string;
  }

// search function
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("student-data");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// faculty filter function
function filterFaculty() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("FakultasFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("student-data");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// prodi filter function
function filterProdi() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("ProdiFilter");
  filter = input.value.toUpperCase();
  table = document.getElementById("student-data");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

//submit form
var selectedRow = null

function onFormSubmit() {
  var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
        resetForm();
    }

  // read data
  function readFormData() {
    var formData = {};
    formData["studentID"] = document.getElementById("inputNIM").value,
    formData["fullName"] = document.getElementById("inputFullName").value,
    formData["gender"] = document.querySelector('input[name="genders"]:checked').value,
    formData["faculty"] = document.getElementById("Fakultas").value,
    formData["prodi"] = document.getElementById("Prodi").value;

    return formData;
    }

  // insert data
  function insertNewRecord(data) {
    var table = document.getElementById("student-data").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.faculty;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.prodi;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
    }

    //reset form
    function resetForm() {
      document.getElementById("inputNIM").value = "";
      document.getElementById("inputFullName").value = "";
      document.querySelector('input[name="genders"]:checked').value = "";
      document.getElementById("Fakultas").value = "";
      document.getElementById("Prodi").value = "";
      selectedRow = null;
     }

     //update data
     function updateRecord(formData) {
      selectedRow.cells[0].innerHTML = formData.studentID;
      selectedRow.cells[1].innerHTML = formData.fullName;
      selectedRow.cells[2].innerHTML = formData.gender;
      selectedRow.cells[3].innerHTML = formData.faculty;
      selectedRow.cells[4].innerHTML = formData.prodi;
     }

     //delete data
     function onDelete(td) {
      if (confirm('Are you sure to delete this record ?')) {
          row = td.parentElement.parentElement;
          document.getElementById("student-data").deleteRow(row.rowIndex);
          resetForm();
      }
  }


