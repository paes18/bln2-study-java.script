███████╗ █████╗ ██╗███████╗
██╔════╝██╔══██╗██║╚══███╔╝
█████╗  ███████║██║  ███╔╝
██╔══╝  ██╔══██║██║ ███╔╝
██║     ██║  ██║██║███████╗
╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝

Ringkasan Bab 8: Array & Array Method
------------------------------------------------

Apa itu Array?

Array adalah tempat untuk menyimpan banyak data dalam satu variabel.

let siswa = ["Budi", "Asep", "Joko"];

Daripada membuat:

let siswa1 = "Budi";
let siswa2 = "Asep";
let siswa3 = "Joko";

lebih praktis memakai Array.

1. Indeks Array

Indeks dimulai dari 0, bukan 1.

let buah = ["Apel", "Jeruk", "Mangga"];
Nilai	Apel	Jeruk	Mangga
Indeks	0	1	2

Mengakses data:

console.log(buah[0]); // Apel
console.log(buah[2]); // Mangga

Mengubah data:

buah[1] = "Anggur";

console.log(buah);
// ["Apel", "Anggur", "Mangga"]
2. Panjang Array (.length)

Untuk mengetahui jumlah data.

let buah = ["Apel", "Jeruk", "Mangga"];

console.log(buah.length);

Output:

3
3. Menampilkan Semua Data

Biasanya menggunakan perulangan for.

let buah = ["Apel", "Jeruk", "Mangga"];

for(let i = 0; i < buah.length; i++){
    console.log(buah[i]);
}

Output:

Apel
Jeruk
Mangga
4. Menambah Data
push() → tambah di belakang
let buah = ["Apel", "Jeruk"];

buah.push("Mangga");

console.log(buah);

Output:

["Apel", "Jeruk", "Mangga"]
unshift() → tambah di depan
buah.unshift("Anggur");

Output:

["Anggur", "Apel", "Jeruk", "Mangga"]
5. Menghapus Data
pop() → hapus data terakhir
buah.pop();

Sebelum:

["Apel", "Jeruk", "Mangga"]

Sesudah:

["Apel", "Jeruk"]
shift() → hapus data pertama
buah.shift();

Sebelum:

["Apel", "Jeruk"]

Sesudah:

["Jeruk"]
6. Mencari Data
indexOf()

Mencari posisi data.

let warna = ["Merah", "Hijau", "Biru"];

console.log(warna.indexOf("Biru"));

Output:

2

Jika tidak ada:

console.log(warna.indexOf("Kuning"));

Output:

-1
7. Mengecek Data
includes()
let warna = ["Merah", "Hijau", "Biru"];

console.log(warna.includes("Hijau"));

Output:

true
console.log(warna.includes("Kuning"));

Output:

false
8. splice()

Untuk hapus, tambah, atau ganti data pada posisi tertentu.

Hapus
let kota = ["Jakarta", "Bandung", "Surabaya"];

kota.splice(1,1);

Output:

["Jakarta", "Surabaya"]
Tambah
kota.splice(1,0,"Yogyakarta");

Output:

["Jakarta", "Yogyakarta", "Surabaya"]
Ganti
kota.splice(1,1,"Semarang");

Output:

["Jakarta", "Semarang", "Surabaya"]
9. slice()

Mengambil sebagian data tanpa mengubah array asli.

let angka = [10,20,30,40,50];

console.log(angka.slice(1,4));

Output:

[20,30,40]

Array asli tetap:

[10,20,30,40,50]
Cheat Sheet Hafalan Cepat
---------------------------------------------
  Method	  |            Fungsi           |
---------------------------------------------
  .length     |   	Jumlah data             |
  .push()     |	    Tambah di belakang      |
  .unshift()  |	    Tambah di depan         |
  .pop()	  |     Hapus dari belakang     |
  .shift()    |	    Hapus dari depan        |
  .indexOf()  |	    Cari posisi data        |
  .includes() |	    Cek data ada/tidak      |
  .splice()	  |     Hapus/Tambah/Ganti data |
  .slice()	  |     Ambil sebagian data     |
---------------------------------------------

Cara Mudah Mengingat

Push        =     dorong ke belakang
Pop         =     ambil dari belakang
Unshift     =     tambah di depan
Shift       =     ambil dari depan
Slice       =     ambil sebagian
Splice      =     edit isi array

Kalau sudah paham 4 method ini:

push()
pop()
shift()
unshift()

maka sekitar 70% penggunaan Array dasar JavaScript sudah kamu kuasai.


███████╗ █████╗ ██╗███████╗
██╔════╝██╔══██╗██║╚══███╔╝
█████╗  ███████║██║  ███╔╝
██╔══╝  ██╔══██║██║ ███╔╝
██║     ██║  ██║██║███████╗
╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝                     
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
_________________________________________________________________________________
_________________________________________________________________________________

Ringkasan Bab 9: JavaScript Function

Apa itu Function?
Function adalah blok kode yang bisa digunakan berulang kali tanpa perlu menulis kode yang sama berkali-kali.

Contoh:

function sapa() {
    console.log("Halo!");
}

sapa();

Output:

Halo!
1. Membuat dan Memanggil Function
Membuat Function
function salam() {
    console.log("Selamat Datang");
}
Memanggil Function
salam();

Output:

Selamat Datang

Function bisa dipanggil berkali-kali:

salam();
salam();
salam();
2. Parameter dan Argumen
Parameter

Variabel yang ada saat membuat function.

function sapa(nama) {
    console.log("Halo " + nama);
}

nama = Parameter

Argumen

Nilai yang dikirim saat function dipanggil.

sapa("Faiz");

"Faiz" = Argumen

Output:

Halo Faiz
3. Parameter Default

Jika tidak mengirim nilai, function akan memakai nilai bawaan.

function diskon(harga, persen = 10) {
    return harga - (harga * persen / 100);
}

console.log(diskon(100000));

Output:

90000

Karena persen tidak diisi, otomatis memakai 10%.

4. Return

return digunakan untuk mengembalikan nilai dari function.

function tambah(a, b) {
    return a + b;
}

let hasil = tambah(5, 3);

console.log(hasil);

Output:

8
Tanpa Return
function tambah(a, b) {
    console.log(a + b);
}

let hasil = tambah(5, 3);

console.log(hasil);

Output:

8
undefined

Karena tidak ada return.

5. Return Menghentikan Function
function cekUmur(umur) {
    if (umur < 18) {
        return "Belum cukup umur";
    }

    return "Sudah cukup umur";
}

console.log(cekUmur(15));

Output:

Belum cukup umur

Setelah return, kode di bawahnya tidak dijalankan lagi.

6. Function Expression

Function disimpan ke dalam variabel.

const luas = function(panjang, lebar) {
    return panjang * lebar;
};

console.log(luas(5, 4));

Output:

20
7. Arrow Function

Cara modern dan lebih singkat.

Function Biasa
const kali = function(a, b) {
    return a * b;
};
Arrow Function
const kali = (a, b) => {
    return a * b;
};
Versi Singkat
const kali = (a, b) => a * b;

console.log(kali(3, 4));

Output:

12
Bentuk-Bentuk Arrow Function
Tanpa Parameter
const salam = () => "Halo";

console.log(salam());

Output:

Halo
Satu Parameter
const kuadrat = n => n * n;

console.log(kuadrat(5));

Output:

25
Dua Parameter
const tambah = (a, b) => a + b;

console.log(tambah(3, 7));

Output:

10
Cheat Sheet Hafalan Cepat
-------------------------------------------------------
   Konsep              |	Fungsi                    |
-------------------------------------------------------
   function	            |   Membuat function          |
   Parameter	        |   Variabel penerima data    |
   Argumen	            |   Nilai yang dikirim        |
   return	            |   Mengembalikan nilai       |
   Function Expression	|   Function dalam variabel   |
   Arrow Function	    |   Function modern dengan => |
-------------------------------------------------------


Cara Mudah Mengingat

Bayangkan Function seperti mesin minuman:

Parameter        =   tempat memasukkan bahan.
Argumen          =   bahan yang dimasukkan.
Proses Function  =   mesin bekerja.
Return           =   minuman yang keluar.

Contoh:

function buatJus(buah) {
    return "Jus " + buah;
}

console.log(buatJus("Mangga"));

Output:

Jus Mangga
Yang wajib hafal dulu
function namaFunction() {}

parameter
argumen
return

const fungsi = () => {}

Kalau sudah paham Function + Parameter + Return + Arrow Function, berarti sekitar 80% dasar Function JavaScript sudah dikuasai.