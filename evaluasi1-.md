Ringkasan Bab 1: Pengenalan JavaScript

JavaScript (JS) adalah bahasa pemrograman yang membuat website menjadi interaktif dan dinamis.
HTML berfungsi sebagai struktur website, CSS mengatur tampilan, dan JavaScript mengatur logika serta interaksi.
Dengan JavaScript, kita bisa membuat:
Tombol yang merespons klik.
Validasi formulir.
Animasi dan galeri gambar.
Mengambil data tanpa refresh halaman.
Di Mana JavaScript Dijalankan?
Browser (Front-End)
Berjalan di Chrome, Firefox, Safari, dll.
Digunakan untuk interaksi pengguna dan tampilan website.
Node.js (Back-End)
Menjalankan JavaScript di server atau komputer.
Digunakan untuk membuat API, mengelola database, dan membangun server.
ECMAScript (ES)
ECMAScript (ES) adalah standar resmi JavaScript.
ES6 / ES2015 adalah pembaruan terbesar yang memperkenalkan:
let
const
Arrow Function (=>)
Class
Template Literal
Kesimpulan

JavaScript adalah bahasa pemrograman yang melengkapi HTML dan CSS untuk membuat website yang interaktif, dinamis, dan fungsional. JavaScript dapat berjalan di browser (Front-End) maupun server menggunakan Node.js (Back-End), serta mengikuti standar ECMAScript (ES) dengan sintaks modern seperti ES6.
---------------------------------------------------------------------------------------------

Ringkasan Bab 2: Sintaks, Statements, & Comments
1. Sintaks JavaScript

Sintaks adalah aturan penulisan kode agar dapat dipahami oleh JavaScript.

Case-Sensitive → huruf besar dan kecil berbeda.

nama ≠ Nama ≠ NAMA
Titik koma (;) digunakan untuk mengakhiri instruksi.
Naming Convention:
camelCase → variabel & fungsi (namaLengkap)
PascalCase → class (DataUser)
UPPER_SNAKE_CASE → konstanta (MAX_USER)
2. Statement dan Expression
Statement

Instruksi yang menyuruh komputer melakukan sesuatu.

let umur = 20;
if (umur >= 18) {
  console.log("Dewasa");
}
Expression

Potongan kode yang menghasilkan nilai.

5 + 10;      // 15
20 > 18;     // true

Cara mudah membedakan:

Menghasilkan nilai → Expression
Menjalankan perintah → Statement
3. Comments (Komentar)

Komentar digunakan untuk memberi catatan pada kode dan tidak dijalankan oleh JavaScript.

Komentar satu baris

// Ini komentar

Komentar banyak baris

/*
Ini komentar
lebih dari satu baris
*/

Tujuan komentar:

Menjelaskan kode.
Mempermudah dokumentasi.
Membantu saat debugging.
Kesimpulan
Sintaks = aturan penulisan JavaScript.
Case-Sensitive = huruf besar dan kecil berbeda.
Statement = perintah untuk komputer.
Expression = kode yang menghasilkan nilai.
Comments = catatan dalam kode yang diabaikan JavaScript.

--------------------------------------------------------------------------------------------------
Ringkasan Bab 3: Variabel di JavaScript
1. Apa Itu Variabel?

Variabel adalah wadah untuk menyimpan data di dalam program.

let nama = "Budi";

Di sini nama adalah variabel dan "Budi" adalah data yang disimpan.

2. let dan const
let

Digunakan jika nilainya bisa berubah.

let skor = 0;
skor = 50;
const

Digunakan jika nilainya tetap dan tidak boleh diubah.

const PHI = 3.14;

Jika diubah:

PHI = 3.15; // Error

Tips Industri:

Gunakan const terlebih dahulu.
Jika nilainya perlu berubah, gunakan let.
3. Mengapa var Tidak Direkomendasikan?

Karena var sering menyebabkan bug:

Bisa diakses di luar blok {}.
Bisa dideklarasikan ulang tanpa error.
var nama = "Budi";
var nama = "Ani"; // Tidak error

Sedangkan:

let nama = "Budi";
let nama = "Ani"; // Error
4. Aturan Penamaan Variabel

 Benar

let namaLengkap;
let totalHarga;
let jumlahBarang;

 Salah

let 1nama;
let nama lengkap;
let nama-user;

Gunakan camelCase:

let namaLengkap;
let totalHargaAkhir;
let jumlahItemKeranjang;
5. Contoh Sederhana
const harga = 50000;
let jumlah = 2;

let total = harga * jumlah;

console.log(total); // 100000
Kesimpulan
Konsep	Penjelasan
Variabel	Tempat menyimpan data
let	Nilainya bisa berubah
const	Nilainya tetap
var	Cara lama, tidak direkomendasikan
camelCase	Standar penamaan variabel
Block Scope	let dan const hanya berlaku di dalam blok {}
Inti Materi
Variabel = tempat menyimpan data.
Gunakan const jika nilai tetap.
Gunakan let jika nilai berubah.
Hindari var.
Gunakan nama variabel yang jelas dan format camelCase.

----------------------------------------------------------------------------------------------------

Ringkasan Bab 4: Tipe-Tipe Data di JavaScript
1. Apa Itu Tipe Data?

Tipe data adalah jenis nilai yang disimpan dalam variabel.

JavaScript bersifat Dynamic Typing, artinya satu variabel bisa berganti tipe data.

let data = 42;      // Number
data = "empat";     // String
data = true;        // Boolean
2. Tipe Data Primitif
String (Teks)

Digunakan untuk menyimpan teks.

let nama = "Budi";
Number (Angka)

Digunakan untuk menyimpan angka.

let umur = 25;
let phi = 3.14;
Boolean (Logika)

Hanya memiliki dua nilai:

true
false

Contoh:

let sudahLogin = true;
Undefined

Variabel sudah dibuat tetapi belum diberi nilai.

let nama;
console.log(nama); // undefined
Null

Variabel sengaja dikosongkan.

let dataUser = null;

Perbedaan:

undefined → belum diberi nilai.
null → sengaja dikosongkan.
3. Tipe Data Non-Primitif
Array

Menyimpan banyak data dalam satu variabel.

let buah = ["Apel", "Jeruk", "Mangga"];

Mengakses data:

buah[0]; // Apel
Object

Menyimpan data yang memiliki beberapa atribut.

let user = {
  nama: "Budi",
  umur: 20
};

Mengakses data:

user.nama;
user.umur;
4. Mengecek Tipe Data (typeof)

Gunakan typeof untuk mengetahui tipe data.

let umur = 20;

console.log(typeof umur);

Hasil:

"number"

Contoh lain:

typeof "Halo";     // string
typeof true;       // boolean
typeof undefined;  // undefined
Kesimpulan
Tipe Data	Contoh
String	"Budi"
Number	25, 3.14
Boolean	true, false
Undefined	undefined
Null	null
Array	["Apel", "Jeruk"]
Object	{nama: "Budi"}
Inti Materi
String = teks.
Number = angka.
Boolean = true atau false.
Undefined = belum diberi nilai.
Null = sengaja dikosongkan.
Array = kumpulan data.
Object = data yang memiliki banyak atribut.
typeof = mengecek tipe data variabel.
