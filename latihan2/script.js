let data=["Alfredo","David","Roger"];
let listMhs= document.getElementById("listMhs");
data.forEach(showMahasiswa);

function showMahasiswa(value, index){
    console.log(value);
    listMhs.innerHTML += "<li>" + value + "</li>";
    // listMhs.innerHTML += "<li>${value}</li>";
}

// tampilkan data localstorage ke dalam elemen <p id='npm'>
let npm = document.getElementById("npm");
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localstorage
localStorage.setItem("email","ahmad@gmail.com");

let hobi = ["game","gambar","tidur"];
localStorage.setItem("hobi",hobi);
localStorage.setItem("myhobi",JSON.stringify(hobi));

//data objek
let mhs = { npm: 2226240002, nama: "andri" };
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan objek
let nilai = [
    {kode_mk : "SI0001", nama_mk : "Pemorgarman Web"},
    {kode_mk : "SI0002", nama_mk : "PAB"},
];
// tampilkan nama_mk Pemograman Web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// tampilkan menggunakan for atau forEach
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai= JSON.parse(localStorage.getItem("nilai"));

for (const [index, data] of lsNilai.entries()) {
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // tampilkan data mk ke dalam <ul id = "listMK">
    document.getElementById("listMK").innerHTML += `<li>${data.kode_mk} ${data.nama_mk}</li>`;

}

let nama = document.getElementById("Nama");
let testimoni = document.getElementById("Testimoni");
let btnsimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnsimpan.addEventListener("click", function(){
    if(localStorage.getItem("testimoni")){
        data= JSON.parse
    }
}