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


siswa.push({
    id: 5,
    nama: "Eko",
    umur: 18,
    nilai: 90
});
function cariSiswa(nama) {
    for (let i = 0; i < siswa.length; i++) {
        if (siswa[i].nama.toLowerCase() === nama.toLowerCase()) {
            return siswa[i];
        }
    }

    return "Siswa tidak ditemukan";
}
console.log("Data setelah ditambah:");
console.log(siswa);
console.log("Hasil pencarian:");
console.log(cariSiswa("Eko"));