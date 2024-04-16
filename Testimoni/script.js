let inputnama = document.getElementById("Nama");
let inputtestimoni = document.getElementById("Testimoni");
let btnsimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnsimpan.addEventListener("click", function () {
  if (localStorage.getItem("testimoni")) {
    data = JSON.parse(localStorage.getItem("testimoni"));
    data.push({
      nama: inputnama.value,
      testimoni: inputtestimoni.value,
    });
  } else {
    // belum ada localStrage dengan key testimoni
    data.push({
      nama: inputnama.value,
      testimoni: inputtestimoni.value,
    });
  }
  // Simpan ke dalam localStorage
  localStorage.setItem("testimoni", JSON.stringify(data));
  // panggil getData()
  getData();
});

// tampilkan data localstorage
function getData() {
  // clear elemnt list
  list.innerHTML = "";
  if (localStorage.getItem("testimoni")) {
    data = JSON.parse(localStorage.getItem("testimoni"));
    for (const [index, row] of data.entries()) {
      list.innerHTML += `<tr><td>${row.nama}</td><td>${row.testimoni}</td></tr>`;
      console.log(row.nama);
    }
  }
}

// panggil getdata
getData();
