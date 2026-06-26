# Ringkasan Bab 21 - Web API

Apa itu Web API?

Web API adalah fitur bawaan browser yang bisa dipanggil menggunakan JavaScript. Dengan Web API, website jadi bisa melakukan hal-hal keren seperti mengambil data dari internet, menyimpan data di browser, mengetahui lokasi pengguna, mengubah URL tanpa reload, sampai menyalin teks ke clipboard.

1. Fetch API

Fetch API digunakan untuk berkomunikasi dengan server.

Biasanya dipakai untuk:

Mengambil data
Mengirim data
Update data
Menghapus data

Karena prosesnya lewat internet, Fetch bersifat asynchronous, jadi biasanya dipakai bersama Promise, async/await, dan try...catch.

Method yang sering dipakai:

GET → mengambil data
POST → menambah data
PUT → mengubah seluruh data
PATCH → mengubah sebagian data
DELETE → menghapus data
2. Web Storage API

Web Storage digunakan untuk menyimpan data langsung di browser.

Ada dua jenis:

localStorage
Data tetap ada walaupun browser ditutup.
Cocok untuk menyimpan tema, username, atau preferensi pengguna.
sessionStorage
Data hanya tersimpan selama tab browser masih terbuka.
Kalau tab ditutup, datanya ikut hilang.

Karena Storage hanya bisa menyimpan String, Object atau Array harus diubah menjadi JSON menggunakan:

JSON.stringify() → Object menjadi String.
JSON.parse() → String menjadi Object.
3. Geolocation API

Geolocation digunakan untuk mengetahui lokasi pengguna.

Browser akan meminta izin terlebih dahulu.

Informasi yang bisa didapat:

Latitude
Longitude
Accuracy

Method yang sering dipakai:

getCurrentPosition() → mengambil lokasi sekali.
watchPosition() → memantau lokasi secara terus-menerus.
clearWatch() → menghentikan pemantauan lokasi.
4. History API

History API digunakan untuk mengatur riwayat halaman browser tanpa melakukan reload.

Method yang sering digunakan:

pushState() → menambah riwayat baru.
replaceState() → mengganti riwayat saat ini.
back() → kembali ke halaman sebelumnya.
forward() → maju ke halaman berikutnya.
go() → berpindah beberapa langkah dalam riwayat.

Biasanya digunakan pada website yang memakai konsep Single Page Application (SPA).
5. Clipboard API

Clipboard API digunakan untuk berinteraksi dengan clipboard.

Fungsinya:

Menyalin teks secara otomatis.
Membaca isi clipboard.

Contohnya tombol Copy Code pada website dokumentasi.
6. Intersection Observer API

API ini digunakan untuk mendeteksi apakah suatu elemen sedang terlihat di layar atau belum.

Biasanya dipakai untuk:

Lazy Loading gambar.
Animasi saat discroll.
Efek muncul ketika elemen masuk ke layar.

API ini membantu meningkatkan performa website karena elemen baru diproses ketika benar-benar dibutuhkan.

Kesimpulan

Web API membuat website tidak hanya menampilkan halaman, tetapi juga bisa berinteraksi dengan browser, pengguna, dan server.

Ringkasan fungsi setiap API:

API Fungsi
Fetch API Mengambil dan mengirim data ke server
Web Storage API Menyimpan data di browser
Geolocation API Mengambil lokasi pengguna
History API Mengatur navigasi tanpa reload
Clipboard API Menyalin dan membaca clipboard
Intersection Observer API Mendeteksi elemen yang terlihat di layar
Cara gampang mengingat
Fetch API
↓
Ngambil data dari server

Web Storage
↓
Nyimpan data di browser

Geolocation
↓
Ngambil lokasi pengguna

History API
↓
Ngatur URL tanpa reload

Clipboard API
↓
Copy dan Paste otomatis

Intersection Observer
↓
Deteksi elemen saat muncul di layar

Intinya: Web API adalah kumpulan fitur bawaan browser yang membuat website menjadi lebih interaktif, dinamis, dan terasa seperti aplikasi sungguhan.
