/*+ - * / % ** → Perhitungan
== === != !== > < >= <= → Perbandingan
&& || ! → Logika
= += -= *= /= → Penugasan
++ -- → Tambah/Kurang 1
+ (pada string) → Menggabungkan teks*/
/*
//soal no 1
console.log(10 + 5 * 2);      // 20
console.log((10 + 5) * 2);    // 30
console.log(20 / 2 + 3);      // 13
console.log(20 / (2 + 3));    // 4
console.log(10 % 3);          // 1

//soal no 2
let a = 15
let b = 20
let c = 15

console.log (a == b); //false
console.log (a == c); //true
console.log (a != b); //true
console.log (a > b); //false
console.log (a <= c); //true

//soal no 3
let umur = 18;
let memilikitiket = true;

console.log (umur >= 17 && memilikitiket); //true

//soal no 4
let admin = false;
let moderator = true;

console.log (admin || moderator); //true

//soal no 5
let listrikmati = false;
let internetputus = true;

let gangguan = listrikmati || internetputus

console.log(gangguan); //true

//soal no 6
console.log(true && true);        // true
console.log(true && false);       // false
console.log(false || true);       // true
console.log(false || false);      // false
console.log(!true);               // false
console.log(!false);              // true
console.log(!(true && false));    // true

//soal no 7
let x = 8;
let y = 12;
let z = 15;

console.log(x < y && y < z); // true
console.log(x > y && y < z); // false

//soal no 8
let nilai = 85;
let kehadiran = 90;
let tugas = 70;

console.log(nilai >= 80 && kehadiran >= 90);     // true
console.log(nilai > 90 || tugas >= 70);          // true
console.log(nilai < 80 && kehadiran > 85);       // false

// soal no 9
let a = 10;
let b= 5;
let c = 20;

console.log((a > b) && (c > a)); // true

let a = 10;
let b = 15;
let c = 20;

console.log((a> b) && (c > a)); // false
*/
//soal 10
let a = 6;
let b = 2;
console.log((a * 2 > 10) && (b % 2 == 0)); // true

let a1 = 7;
let b1 = 4;
console.log((a1 * 2 > 10) && (b1 % 2 == 0)); // true

let a2 = 10;
let b2 = 8;
console.log((a * 2 > 10) && (b % 2 == 0)); // true