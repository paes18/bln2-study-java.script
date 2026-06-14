let penduduk = [
    { nama: "Ari", energi: 50, makanan: 7, emas: 30, status: "aktif" },
    { nama: "Bima", energi: 20, makanan: 3, emas: 10, status: "aktif" },
    { nama: "Citra", energi: 0, makanan: 1, emas: 50, status: "tumbang" },
    { nama: "Dewi", energi: 0, makanan: 1, emas: 5, status: "tumbang" },
    { nama: "Eko", energi: 5, makanan: 3, emas: 20, status: "aktif" }
];

let aktif = [];
let tumbang = [];
let totalmakanan = 0;
let totalemas = 0;
let totalenergiaktif = 0;

for (let i = 0; i < penduduk.length; i++) {
    totalmakanan += penduduk[i].makanan;
    totalemas += penduduk[i].emas;

    if (penduduk[i].status === "aktif") {
        aktif.push(penduduk[i].nama);
        totalenergiaktif += penduduk[i].energi;
    } else {
        tumbang.push(penduduk[i].nama);
    }
}

console.log("penduduk aktif:", aktif);
console.log("penduduk tumbang:", tumbang);
console.log("total makanan kerajaan:", totalmakanan);
console.log("total emas kerajaan:", totalemas);
console.log("rata-rata energi aktif:", totalenergiaktif / aktif.length);