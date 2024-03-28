let Angka1 = document.getElementById('Angka1');
let Angka2 = document.getElementById('Angka2');
let Hasil = document.getElementById('hasil');

function tambah(){
    hasil.innerHTML = parseFloat(txtAngka1.value) + parseFloat(txtAngka2.value);
}

function kurang(){
    hasil.innerHTML = parseFloat(txtAngka1.value) - parseFloat(txtAngka2.value);
}

function kali(){
    hasil.innerHTML = parseFloat(txtAngka1.value) * parseFloat(txtAngka2.value);
}

function bagi(){
    hasil.innerHTML = parseFloat(txtAngka1.value) / parseFloat(txtAngka2.value);
}