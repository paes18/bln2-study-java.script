const acara = "Seminar JavaScript";
const tanggalAcara = new Date("2026-12-01");
const sekarang = new Date();

let selisih = tanggalAcara - sekarang;

let hari = parseInt(selisih / (1000 * 60 * 60 * 24));
let jam = parseInt(selisih / (1000 * 60 * 60));

console.log("acara:", acara);
console.log("hari menuju acara:", hari);
console.log("jam menuju acara:", jam);