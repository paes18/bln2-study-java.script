const input = "89.75";

// mengubah string menjadi number
let nilai = Number(input);

console.log("=== soal 7 ===");

console.log("tipe sebelum:", typeof input);
console.log("tipe sesudah:", typeof nilai);

// membulatkan nilai
let angkaBulat = parseInt(nilai);
let desimal = nilai - angkaBulat;

let hasilBulat;

if (desimal >= 0.5) {
    hasilBulat = angkaBulat + 1;
} else {
    hasilBulat = angkaBulat;
}

console.log("hasil pembulatan:", hasilBulat);

// cek bilangan bulat atau bukan
if (nilai === parseInt(nilai)) {
    console.log("termasuk bilangan bulat");
} else {
    console.log("bukan bilangan bulat");
}