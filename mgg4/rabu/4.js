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



let jsonString = JSON.stringify(siswa);
console.log("Data menjadi JSON String:");
console.log(jsonString);

let dataObjectLagi = JSON.parse(jsonString);
console.log("JSON String diubah lagi menjadi Object JavaScript:");
console.log(dataObjectLagi);
