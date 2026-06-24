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


let tertinggi = siswa[0];
let terendah = siswa[0];
let totalNilai = siswa[0];

for (let i = 0; i < siswa.length; i++){
    totalNilai += siswa[i].nilai;

      if(siswa[i].nilai > tertinggi.nilai){
        teringgi = siswa[i];
      }
       
       if (siswa[i].nilai < terendah.nilai) {
        terendah = siswa[i]
       } 

}

let rataRata =totalNilai / siswa.length;

console.log("Siswa nilai tertinggi :" + tertinggi.nama +" ("+ tertinggi.nilai + ")");
console.log("Siswa nilai terndah :" + terendah.nama +" ("+ terendah.nilai + ")");
console.log("Rata-rata nila  : " + rataRata);