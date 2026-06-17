const namaBarang = "Laptop Gaming";
const hargaBarang = "15749999.95";
const diskon = 12.5;

let hargaAsli = Number(hargaBarang);
let nominalDiskon = hargaAsli * diskon / 100;
let hargaSetelahDiskon = hargaAsli - nominalDiskon;

console.log("=== soal 9 ===");
console.log("nama barang:", namaBarang.toUpperCase());
console.log("harga asli:", hargaAsli.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
}));
console.log("diskon:", diskon + "%");
console.log("nominal diskon:", nominalDiskon.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
}));
console.log("harga setelah diskon:", hargaSetelahDiskon);
console.log("harga akhir:", hargaSetelahDiskon.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
}));

