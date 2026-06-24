let siswa = [
    {
        id: 1,
        nama: "Ari",
        umur: 17,
        nilai: 85
    },
    {
        id: 2,
        nama: "Bima",
        umur: 18,
        nilai: 72
    },
    {
        id: 3,
        nama: "Citra",
        umur: 17,
        nilai: 95
    },
    {
        id: 4,
        nama: "Dewi",
        umur: 16,
        nilai: 68
    }
];


function laporanKelas() {
    let total = 0;
    let nilaiTertinggi = siswa[0];
    let nilaiTerendah = siswa[0];

    for (let i = 0; i < siswa.length; i++) {
        total += siswa[i].nilai;

        if (siswa[i].nilai > nilaiTertinggi.nilai) {
            nilaiTertinggi = siswa[i];
        }

        if (siswa[i].nilai < nilaiTerendah.nilai) {
            nilaiTerendah = siswa[i];
        }
    }

    let rata = total / siswa.length;

    console.log("Jumlah siswa    : " + siswa.length);
    console.log("Rata-rata nilai : " + rata);
    console.log("Nilai tertinggi : " + nilaiTertinggi.nama + " (" + nilaiTertinggi.nilai + ")");
    console.log("Nilai terendah  : " + nilaiTerendah.nama + " (" + nilaiTerendah.nilai + ")");
    console.log("Siswa di atas rata-rata:");
    for (let i = 0; i < siswa.length; i++) {
        if (siswa[i].nilai > rata) {
            console.log("- " + siswa[i].nama + " (" + siswa[i].nilai + ")");
        }
    }
}

laporanKelas();