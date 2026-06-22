# Bab 16: DOM (Manipulasi DOM)

## Pengertian DOM

DOM (Document Object Model) adalah representasi halaman HTML dalam bentuk object yang dapat diakses dan dimanipulasi menggunakan JavaScript.

DOM berfungsi sebagai penghubung antara HTML dan JavaScript sehingga elemen pada halaman web dapat diubah secara dinamis tanpa perlu me-refresh halaman.

---

## Menyeleksi Elemen

Sebelum memanipulasi elemen HTML, JavaScript harus menemukan elemen tersebut terlebih dahulu.

Method yang dapat digunakan:

* `getElementById()`
* `querySelector()`
* `querySelectorAll()`

Contoh:

```javascript
const judul = document.getElementById("judul");
const tombol = document.querySelector(".btn");
const paragraf = document.querySelectorAll("p");
```

---

## Mengubah Konten

JavaScript dapat mengubah isi teks maupun isi HTML suatu elemen.

Contoh:

```javascript
judul.textContent = "Halo Dunia";
judul.innerHTML = "<b>Halo Dunia</b>";
```

* `textContent` digunakan untuk mengubah teks biasa.
* `innerHTML` digunakan untuk mengubah isi HTML beserta tag di dalamnya.

---

## Mengubah Atribut

Atribut HTML dapat dibaca maupun diubah menggunakan JavaScript.

Contoh:

```javascript
gambar.setAttribute("src", "foto.jpg");
```

Method yang digunakan:

* `getAttribute()`
* `setAttribute()`

---

## Mengubah Style

JavaScript dapat mengubah tampilan CSS secara langsung.

Contoh:

```javascript
box.style.backgroundColor = "red";
box.style.color = "white";
```

---

## Mengelola Class

Class CSS dapat ditambah, dihapus, atau diaktifkan menggunakan `classList`.

Contoh:

```javascript
box.classList.add("aktif");
box.classList.remove("aktif");
box.classList.toggle("aktif");
```

Method yang sering digunakan:

* `add()`
* `remove()`
* `toggle()`
* `contains()`

---

## Membuat Elemen Baru

JavaScript dapat membuat elemen HTML baru secara dinamis.

Contoh:

```javascript
const item = document.createElement("li");

item.textContent = "Belajar DOM";

daftar.appendChild(item);
```

Langkah-langkah:

1. Membuat elemen baru dengan `createElement()`.
2. Mengisi konten elemen.
3. Menyisipkan elemen ke halaman menggunakan `appendChild()`.

---

## Kesimpulan

DOM memungkinkan JavaScript untuk berinteraksi langsung dengan elemen HTML.

Dengan DOM, JavaScript dapat:

* Menemukan elemen HTML.
* Mengubah isi elemen.
* Mengubah atribut.
* Mengubah style.
* Menambah atau menghapus class.
* Membuat elemen baru.
* Menghapus elemen yang sudah ada.

DOM merupakan dasar untuk membuat halaman web yang interaktif dan dinamis.

## pengertian singkat

getElementById()   = cari id
querySelector()   = cari 1 elemen
querySelectorAll()= cari banyak elemen

textContent = ubah teks
innerHTML   = ubah HTML
style       = ubah CSS

add()       = tambah class
remove()    = hapus class
toggle()    = hidup/matikan class

createElement() = buat elemen
appendChild()   = masukkan elemen
