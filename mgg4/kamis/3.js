function ambilMateri() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let berhasil = true;

            if (berhasil) {
                resolve("Materi berhasil dimuat");
            } else {
                reject("Gagal mengambil materi");
            }
        }, 2000);
    });
}
ambilMateri()
    .then(function (hasil) {
        console.log(hasil);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Proses selesai");
    });
