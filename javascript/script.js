document.getElementById("welcome").innerHTML = "Selamat datang";
document.getElementById("nama").innerHTML = "<b>Ahamad</b>";
document.getElementById("email").innerText = "ahmad@test.com";

console.log("hanya bisa dilihat di console");

// variabel
let nama = "";
let email = "";
let data = [];//array/larik

// fuction
function tampil(){
    console.log("button ditekan");
  // simpan value txtNama ke dalam variable "nama"
    nama = document.getElementById("txtNama").value;
    console.log(nama);
  // ubah konten <p id="nama"></p>
    document.getElementById("nama").innerHTML = nama;

  // simpan value txtNama ke dalam variable "email"
    email = document.getElementById("txtEmail").value;
  // ubah konten <p id="email"></p>
    document.getElementById("email").innerHTML = email;
  // simpan ke dalam array data
    data.push(nama);
    data.push(email);
    console.log(data);
}