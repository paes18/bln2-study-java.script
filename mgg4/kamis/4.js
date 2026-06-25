const databasePengguna = [
    { id: 1, nama: "Budi", premium: true },
    { id: 2, nama: "Ani", premium: false },
    { id: 3, nama: "Dodi", premium: true }
];
function ambilPengguna(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let ketemu = null;

            for (let i = 0; i < databasePengguna.length; i++) {
                if (databasePengguna[i].id === id) {
                    ketemu = databasePengguna[i];
                }
            }
            if (ketemu !== null) {
                resolve(ketemu);
            } else {
                reject("Pengguna tidak ditemukan");
            }
        }, 2000);
    });
}
ambilPengguna(1)
    .then(function (data) {
        console.log("Nama:", data.nama);
        console.log("Premium:", data.premium);
    })
    .catch(function (error) {
        console.log(error);
    });
