// Ini Codingan JavaScript (harus paham Aksara Jawa duluh yahhhh :v muumetttttt)


// Penambahan Variabel pada Program
const calculator = document.getElementById("calculator");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const sisi = document.getElementById("sisi");
const luasButton = document.getElementById("luas-button");
const kelilingButton = document.getElementById("keliling-button");
const clearButton = document.getElementById("clear-button");
const luasResult = document.getElementById("luas-result");
const kelilingResult = document.getElementById("keliling-result");

// Validasi Input untuk Luas
const validateLuasInput = () => {
    if (alas.value && tinggi.value) {
        return true;
    } else {
        alert("Silahkan masukan kedua Alas dan Tinggi untuk menghitung Luas.");
        return false;
    }
}

// Validasi Input untuk Keliling
const validateKelilingInput = () => {
    if (sisi.value) {
        return true;
    } else {
        alert("Silahkan masukan kedua Alas dan Tinggi untuk menghitung Keliling.");
        return false;
    }
}

// Hitung Luasnya
const calculateLuas = () => {
    if (validateLuasInput()) {
        const luas = 0.5 * parseFloat(alas.value) * parseFloat(tinggi.value);
        luasResult.textContent = `Luas: ${luas}`;
        luasResult.style.display = "block";
        kelilingResult.style.display = "none";
    }
}

// Hitung Kelilingnya
const calculateKeliling = () => {
    if (validateKelilingInput()) {
        const keliling = parseFloat(sisi.value) * 3;
        kelilingResult.textContent = `Keliling: ${keliling}`;
        kelilingResult.style.display = "block";
        luasResult.style.display = "none";
    }
}

// Hapus Hasil Hitungan
const clearResult = () => {
    luasResult.textContent = "";
    kelilingResult.textContent = "";
    luasResult.style.display = "none";
    kelilingResult.style.display = "none";
}

luasButton.addEventListener("click", calculateLuas);
kelilingButton.addEventListener("click", calculateKeliling);
clearButton.addEventListener("click", clearResult);