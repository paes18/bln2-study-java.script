let penduduk = [
    { nama: "Ari", energi: 90, makanan: 2, emas: 30, status: "aktif" },
    { nama: "Bima", energi: 60, makanan: 1, emas: 10, status: "aktif" },
    { nama: "Citra", energi: 50, makanan: 0, emas: 50, status: "aktif" },
    { nama: "Dewi", energi: 20, makanan: 4, emas: 5, status: "aktif" },
    { nama: "Eko", energi: 75, makanan: 0, emas: 20, status: "aktif" }
];

function simulasidayone(data) {

                                    // fase-1-konsumsi-makanan
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "aktif") {
            if (data[i].makanan > 0) {
                data[i].makanan = data[i].makanan - 1;
                data[i].energi = data[i].energi + 10;
            } else {
                data[i].energi = data[i].energi - 20;
            }
        }
    }

                                    // fase-2-status-tumbang
    for (let i = 0; i < data.length; i++) {
        if (data[i].energi <= 0) {
            data[i].status = "tumbang";
        }
    }

                                  // fase-3-mencari-makanan
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "aktif") {

            if (data[i].energi >= 80) {
                data[i].makanan = data[i].makanan + 3;
            } else if (data[i].energi >= 50) {
                data[i].makanan = data[i].makanan + 2;
            } else if (data[i].energi >= 30) {
                data[i].makanan = data[i].makanan + 1;
            } else {
                data[i].makanan = data[i].makanan + 0;
            }

            data[i].energi = data[i].energi - 15;
        }
    }

                                           // fase-4-pasar
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "aktif") {
            if (data[i].makanan == 0 && data[i].emas >= 10) {
                data[i].makanan = data[i].makanan + 1;
                data[i].emas = data[i].emas - 10;
            }
        }
    }

                                          // fase-5-solidaritas
    for (let i = 0; i < data.length; i++) {
        if (data[i].status == "aktif" && data[i].makanan > 3) {

            let penerima = -1;

            for (let j = 0; j < data.length; j++) {
                if (i != j && data[j].status == "aktif") {

                    if (penerima == -1) {
                        penerima = j;
                    } else if (data[j].makanan < data[penerima].makanan) {
                        penerima = j;
                    } else if (
                        data[j].makanan == data[penerima].makanan &&
                        data[j].energi < data[penerima].energi
                    ) {
                        penerima = j;
                    }
                }
            }

            if (penerima != -1) {
                data[i].makanan = data[i].makanan - 1;
                data[penerima].makanan = data[penerima].makanan + 1;

                console.log(data[i].nama + " membantu " + data[penerima].nama);
            }
        }
    }
}

console.log("----- data sebelum simulasi ------------");
console.log(penduduk);

simulasidayone(penduduk);

console.log("------ data setelah 1 hari -----------------");
console.log(penduduk);