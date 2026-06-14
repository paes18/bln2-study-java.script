let penduduk = [
    { nama: "Ari", energi: 50, makanan: 7, emas: 30, status: "aktif" },
    { nama: "Bima", energi: 20, makanan: 3, emas: 10, status: "aktif" },
    { nama: "Citra", energi: 0, makanan: 1, emas: 50, status: "tumbang" },
    { nama: "Dewi", energi: 0, makanan: 1, emas: 5, status: "tumbang" },
    { nama: "Eko", energi: 5, makanan: 3, emas: 20, status: "aktif" }
];

let totalenergi = penduduk
    .map(function (orang) {
        return orang.energi;
    })
    .reduce(function (total, nilai) {
        return total + nilai;
    });

let totalmakanan = penduduk
    .map(function (orang) {
        return orang.makanan;
    })
    .reduce(function (total, nilai) {
        return total + nilai;
    });

let totalemas = penduduk
    .map(function (orang) {
        return orang.emas;
    })
    .reduce(function (total, nilai) {
        return total + nilai;
    });

let jumlahaktif = penduduk.filter(function (orang) {
    return orang.status === "aktif";
}).length;

console.log("Total energi:", totalenergi);
console.log("Total makanan:", totalmakanan);
console.log("Total emas:", totalemas);
console.log("Jumlah penduduk aktif:", jumlahaktif);