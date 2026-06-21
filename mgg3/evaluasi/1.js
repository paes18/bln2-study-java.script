const peserta = [
    {
        nama: "Ari",
        tanggalLahir: "2007-03-15",
        nilai: [80, 90, 75],
        penghasilanOrtu: 3500000
    },
    {
        nama: "Bima",
        tanggalLahir: "2006-08-22",
        nilai: [60, 70, 85],
        penghasilanOrtu: 1500000
    },
    {
        nama: "Citra",
        tanggalLahir: "2007-01-10",
        nilai: [95, 88, 92],
        penghasilanOrtu: 7000000
    }
];
function hitungUmur(tanggalLahir) {
    const lahir = new Date(tanggalLahir);
    const sekarang = new Date();

    let umur = sekarang.getFullYear() - lahir.getFullYear();

    if (
        sekarang.getMonth() < lahir.getMonth() ||
        (sekarang.getMonth() === lahir.getMonth() && sekarang.getDate() < lahir.getDate())
    ) {
        umur--;
    }
    return umur;
}
function rataRata(nilai) {
    let total = 0;
    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }
    return total / nilai.length;
}
const hasilSeleksi = peserta.map(function (data) {
    const { nama, tanggalLahir, nilai, penghasilanOrtu } = data;

    const umur = hitungUmur(tanggalLahir);
    const rata = rataRata(nilai);

    let skor = 0;
    let alasan = [];

    if (umur <= 19) {
        skor += 20;
        alasan.push("umur terpenuhi");
    } else {
        alasan.push("umur kurang memenuhi");
    }
    if (rata >= 80) {
        skor += 50;
        alasan.push("nilai rata-rata bagus");
    } else {
        alasan.push("nilai rata-rata belum cukup tinggi");
    }
    if (penghasilanOrtu <= 4000000) {
        skor += 30;
        alasan.push("penghasilan ortu sesuai");
    } else {
        alasan.push("penghasilan ortu tinggi");
    }
    return {
        ...data,
        umur: umur,
        rataRata: Number(rata.toFixed(2)),
        skor: skor,
        alasan: alasan
    };
});
hasilSeleksi.sort(function (a, b) {
    return b.skor - a.skor;
});
console.log("___ ranking peserta _____");
for (let i = 0; i < hasilSeleksi.length; i++) {
    console.log("ranking " + (i + 1) + ":", hasilSeleksi[i].nama);
    console.log("umur:", hasilSeleksi[i].umur);
    console.log("rata-rata:", hasilSeleksi[i].rataRata);
    console.log("skor:", hasilSeleksi[i].skor);
    console.log("alasan:", hasilSeleksi[i].alasan);
    console.log("----------------");
}
console.log("peserta terbaik:", hasilSeleksi[0].nama);