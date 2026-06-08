/*+ - * / % ** → Perhitungan
== === != !== > < >= <= → Perbandingan
&& || ! → Logika
= += -= *= /= → Penugasan
++ -- → Tambah/Kurang 1
+ (pada string) → Menggabungkan teks*/


// Soal 1
/*
console.log(10 + 5 * 2);      // 20
console.log((10 + 5) * 2);    // 30
console.log(20 / 2 + 3);      // 13
console.log(20 / (2 + 3));    // 4
console.log(10 % 3);          // 1
*/

// Soal 2
let a = 15;
let b = 20;
let c = 15;

console.log(a == b);   // false
console.log(a == c);   // true
console.log(a != b);   // true
console.log(a > b);    // false
console.log(a <= c);   // true


// Soal 3
let umur = 18;
let memilikiTiket = true;

console.log(umur >= 17 && memilikiTiket); // true


// Soal 4
let admin = false;
let moderator = true;

console.log(admin || moderator); // true


// Soal 5
let listrikMati = false;
let internetPutus = true;

console.log(listrikMati || internetPutus); // true


// Soal 6
console.log(true && true);        // true
console.log(true && false);       // false
console.log(false || true);       // true
console.log(false || false);      // false
console.log(!true);               // false
console.log(!false);              // true
console.log(!(true && false));    // true


// Soal 7
let x = 8;
let y = 12;
let z = 15;

// a. hasil true
console.log(x < y && y < z); // true

// b. hasil false
console.log(x > y && y < z); // false


// Soal 8
let nilai = 85;
let kehadiran = 90;
let tugas = 70;

console.log(nilai >= 80 && kehadiran >= 90);     // true
console.log(nilai > 90 || tugas >= 70);          // true
console.log(nilai < 80 && kehadiran > 85);       // false


// Soal 9
let a = 10;
let b= 5;
let c = 20;

console.log((a > b) && (c > a)); // true

let a = 10;
let b = 15;
let c = 20;

console.log((a> b) && (c > a)); // false


// Soal 10
let a = 6;
let b = 2;
console.log((a * 2 > 10) && (b % 2 == 0)); // true

let a = 7;
let b = 4;
console.log((a * 2 > 10) && (b % 2 == 0)); // true

let a = 10;
let b = 8;
console.log((a * 2 > 10) && (b % 2 == 0)); // true