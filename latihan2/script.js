let data=["Alfredo","David","Roger"];
let listMhs= document.getElementById("listMhs");
data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";
    // listMhs.innerHTML += "<li>${value}</li>";
}