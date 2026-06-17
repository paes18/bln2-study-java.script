const nama = "Muhammad Faiz Patiogi Kitta";

let pecahNama = nama.split(" ");
let inisial = "";
let titleCase = "";

for (let i = 0; i < pecahNama.length; i++) {
    inisial += pecahNama[i][0].toUpperCase() + ". ";

    let awal = pecahNama[i][0].toUpperCase();
    let sisa = pecahNama[i].slice(1).toLowerCase();

    titleCase += awal + sisa + " ";
}

console.log("inisial:", inisial.trim());
console.log("kapital semua:", nama.toUpperCase());
console.log("title case:", titleCase.trim());
