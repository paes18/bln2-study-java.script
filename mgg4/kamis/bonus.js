function ambilRankingSiswa() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            let data = [
                { nama: "Budi", nilai: 90 },
                { nama: "Ani", nilai: 75 },
                { nama: "Dodi", nilai: 60 }
            ];

            data.sort(function (a, b) {
                return b.nilai - a.nilai;
            });

            resolve(data);
        }, 2000);
    });
}
async function tampilkanRanking() {
    const ranking = await ambilRankingSiswa();

    console.log("Ranking siswa:");

    for (let i = 0; i < ranking.length; i++) {
        console.log(
            "Peringkat " + (i + 1) + ": " +
            ranking[i].nama + " (" + ranking[i].nilai + ")"
        );
    }
}

tampilkanRanking();

// alasan desain bonus:
// saya memilih ranking siswa karena cocok dengan platform belajar.
// data ranking dimuat secara asynchronous menggunakan Promise,
// seolah-olah data sedang diambil dari server.