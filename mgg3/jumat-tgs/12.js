const ranking = [
    "faiz",
    "Bima",
    "yuda",
    "alok",
    "Eko"
];
const [juara1, juara2, juara3, ...sisapeserta] = ranking;

console.log("juara 1:", juara1);
console.log("juara 2:", juara2);
console.log("juara 3:", juara3);
console.log("sisa peserta:", sisapeserta);