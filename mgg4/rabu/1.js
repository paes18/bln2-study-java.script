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

for (let i = 0; i< siswa.length; i++){
    console.log("Nama : + siswa[i].nama");
    console.log("Umur : + siswa[i].umur");
    console.log("Nilai : + siswa[i].nilai");
    console.log("---------------------------")
}