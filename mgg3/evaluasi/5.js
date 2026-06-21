const peserta = [
    {
        nama: "Ari",
        nilai: [90, 80, 85]
    },
    {
        nama: "Bima",
        nilai: [100, 60, 70]
    },
    {
        nama: "Citra",
        nilai: [95, 90, 88]
    }
];
function buatLeaderboard(data) {
    let dataPeserta = [...data];
    let riwayatData = [];

    function rataRata(nilai) {
        let total = 0;

        for (let i = 0; i < nilai.length; i++) {
            total += nilai[i];
        }
        return total / nilai.length;
    }
    function simpanRiwayat(aksi) {
        riwayatData.push({
            aksi: aksi,
            waktu: new Date()
        });
    }
    return {
        tambahPeserta: function (nama, ...nilai) {
            dataPeserta.push({
                nama: nama,
                nilai: nilai
            });
            simpanRiwayat("menambah peserta " + nama);
        },
        hapusPeserta: function (nama) {
            let dataBaru = [];
            for (let i = 0; i < dataPeserta.length; i++) {
                if (dataPeserta[i].nama !== nama) {
                    dataBaru.push(dataPeserta[i]);
                }
            }
            dataPeserta = dataBaru;
            simpanRiwayat("menghapus peserta " + nama);
        },
        ubahNilai: function (nama, ...nilaiBaru) {
            for (let i = 0; i < dataPeserta.length; i++) {
                if (dataPeserta[i].nama === nama) {
                    dataPeserta[i] = {
                        ...dataPeserta[i],
                        nilai: nilaiBaru
                    };
                }
            }
            simpanRiwayat("mengubah nilai " + nama);
        },
        ranking: function () {
            let hasil = [];
            for (let i = 0; i < dataPeserta.length; i++) {
                const { nama, nilai } = dataPeserta[i];
                hasil.push({
                    nama: nama,
                    nilai: [...nilai],
                    rataRata: Number(rataRata(nilai).toFixed(2))
                });
            }
            hasil.sort(function (a, b) {
                return b.rataRata - a.rataRata;
            });
            console.log("-_-_-_ ranking -_-_-_-_-_-");
            console.log(hasil);
        },
        riwayat: function () {
            console.log("_-_-_-_-_ riwayat _-_-_-_-_-");
            console.log(riwayatData);
        }
    };
}
const leaderboard = buatLeaderboard(peserta);

leaderboard.ranking();
leaderboard.tambahPeserta("Dewi", 80, 90, 85);
leaderboard.ubahNilai("Bima", 90, 90, 90);
leaderboard.hapusPeserta("Ari");
leaderboard.ranking();
leaderboard.riwayat();

console.log("data asli:");
console.log(peserta); 