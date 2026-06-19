const nilai = [85, 92, 78, 95, 88];
const [pertama, kedua, , ...sisanilai] = nilai;
const terakhir = nilai[nilai.length - 1];

console.log("nilai pertama:", pertama);
console.log("nilai kedua:", kedua);
console.log("nilai terakhir:", terakhir);
console.log("sisa nilai:", sisanilai);