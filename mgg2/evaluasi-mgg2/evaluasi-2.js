let penduduk = [
    { nama: "Ari", energi: 85, makanan: 3, emas: 30, status: "aktif" },
    { nama: "Bima", energi: 55, makanan: 2, emas: 10, status: "aktif" },
    { nama: "Citra", energi: 15, makanan: 3, emas: 50, status: "aktif" },
    { nama: "Dewi", energi: 15, makanan: 3, emas: 5, status: "aktif" },
    { nama: "Eko", energi: 40, makanan: 2, emas: 20, status: "aktif" }
];

function simulasiHari(data) {
    for (let i = 0; i < data.length; i++) { // fase konsumsi
        if (data[i].status === "aktif") {
            if (data[i].makanan > 0) {
                data[i].makanan--;
                data[i].energi += 10;
            } else {
                data[i].energi -= 20;
            }
        }
    }

    for (let i = 0; i < data.length; i++) { // status penduduk
        if (data[i].energi <= 0) {
            data[i].status = "tumbang";
        }
    }

    for (let i = 0; i < data.length; i++) { // cari makan
        if (data[i].status === "aktif") {
            if (data[i].energi >= 80) {
                data[i].makanan += 3;
            } else if (data[i].energi >= 50) {
                data[i].makanan += 2;
            } else if (data[i].energi >= 30) {
                data[i].makanan += 1;
            }

            data[i].energi -= 15;
        }
    }

    for (let i = 0; i < data.length; i++) { //pasar
        if (data[i].status === "aktif") {
            if (data[i].makanan === 0 && data[i].emas >= 10) {
                data[i].makanan++;
                data[i].emas -= 10;
            }
        }
    }
     for (let i = 0; i < data.length; i++) { //sistem solid
        if (data[i].status === "aktif" && data[i].makanan > 3) {

            let penerima = -1;

            for (let j = 0; j < data.length; j++) {
                if (i !== j && data[j].status === "aktif") {

                    if (penerima === -1) {
                        penerima = j;
                    } else if (data[j].makanan < data[penerima].makanan) {
                        penerima = j;
                    } else if (
                        data[j].makanan === data[penerima].makanan &&
                        data[j].energi < data[penerima].energi
                    ) {
                        penerima = j;
                    }

                }
            }

            if (penerima !== -1) {
                data[i].makanan--;
                data[penerima].makanan++;
            }
        }
    }
}

for (let hari = 1; hari <= 7; hari++) {
    simulasiHari(penduduk);

    console.log("----- Hari ke-" + hari + "---------------");

    for (let i = 0; i < penduduk.length; i++) {
        console.log(penduduk[i]);
    }
}