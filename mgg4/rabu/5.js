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


let ranking = [...siswa];

ranking.sort(function (a, b) {
    return b.nilai - a.nilai;
});

for (let i = 0; i < ranking.length; i++) {
    console.log(
        "Peringkat " + (i + 1) + " : " +
        ranking[i].nama + " (" + ranking[i].nilai + ")"
    );
}