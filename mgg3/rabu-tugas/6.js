const harga = 125499.789;

// membulatkan ke bawah
let bawah = parseInt(harga);

// membulatkan ke atas
let atas = bawah;

if (harga > bawah) {
    atas++;
}

// membulatkan ke bilangan terdekat
let desimal = harga - bawah;
let terdekat;

if (desimal >= 0.5) {
    terdekat = bawah + 1;
} else {
    terdekat = bawah;
}

console.log("=== soal 6 ===");
console.log("bulat ke atas:", atas);
console.log("bulat ke bawah:", bawah);
console.log("bilangan terdekat:", terdekat);
console.log("2 angka di belakang koma:", harga.toFixed(2));
console.log("format rupiah: Rp" + harga.toFixed(2));