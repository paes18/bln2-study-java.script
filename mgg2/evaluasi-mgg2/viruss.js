//covid 2019 awokawokawok
let penduduk = [
    { nama: "Ari", energi: 50, makanan: 7, emas: 30, status: "aktif" },
    { nama: "Bima", energi: 20, makanan: 3, emas: 10, status: "aktif" },
    { nama: "Citra", energi: 0, makanan: 1, emas: 50, status: "tumbang" },
    { nama: "Dewi", energi: 0, makanan: 1, emas: 5, status: "tumbang" },
    { nama: "Eko", energi: 5, makanan: 3, emas: 20, status: "aktif" }
];
function covid(data) {
    console.log("virus corona pun datang . semua penduduk aktif kehilangan 40 energi.");

    for (let i = 0; i < data.length; i++) {
        if (data[i].status === "aktif") {
            data[i].energi -= 40;

            if (data[i].energi <= 0) {
                data[i].status = "tumbang";
            }
        }
    }
}

covid(penduduk);
console.log(penduduk);