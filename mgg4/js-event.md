# Bab 17: JavaScript Events

## Pengertian Event

Event adalah kejadian atau aksi yang dilakukan oleh pengguna pada halaman web, seperti klik tombol, mengetik pada input, mengirim form, atau menggerakkan mouse.

JavaScript dapat mendeteksi event tersebut dan menjalankan kode tertentu sebagai respon terhadap aksi pengguna.

---

## Event Listener

Event Listener digunakan untuk mendengarkan suatu event pada elemen HTML.

Method yang digunakan:

```javascript
element.addEventListener("event", function () {

});
```

Contoh:

```javascript
const tombol = document.querySelector("#btn");

tombol.addEventListener("click", function () {
    console.log("tombol diklik");
});
```

---

## Jenis Event yang Sering Digunakan

### Event Mouse

```javascript
click
dblclick
mouseenter
mouseleave
mousemove
```

Contoh:

```javascript
tombol.addEventListener("click", function () {
    console.log("klik");
});
```

---

### Event Keyboard

```javascript
keydown
keyup
```

Contoh:

```javascript
input.addEventListener("keydown", function () {
    console.log("keyboard ditekan");
});
```

---

### Event Form

```javascript
input
change
submit
focus
blur
```

Contoh:

```javascript
form.addEventListener("submit", function () {
    console.log("form dikirim");
});
```

---

### Event Halaman

```javascript
load
DOMContentLoaded
scroll
resize
```

Contoh:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    console.log("halaman siap");
});
```

---

## Event Object

Saat event terjadi, JavaScript akan membuat object event yang berisi informasi tentang kejadian tersebut.

Contoh:

```javascript
tombol.addEventListener("click", function (e) {

    console.log(e.type);
    console.log(e.target);

});
```

Beberapa properti yang sering digunakan:

```javascript
e.type
e.target
e.target.value
e.key
```

---

## preventDefault()

Method ini digunakan untuk mencegah perilaku bawaan browser.

Contoh:

```javascript
form.addEventListener("submit", function (e) {

    e.preventDefault();

    console.log("form tidak reload");

});
```

Fungsi:

* Mencegah form melakukan refresh.
* Mencegah link berpindah halaman.
* Memberikan kontrol penuh kepada JavaScript.

---

## Event Delegation

Event Delegation adalah teknik memasang satu event listener pada elemen induk untuk menangani banyak elemen anak.

Contoh:

```javascript
const daftar = document.querySelector("#menu");

daftar.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        console.log(e.target.textContent);
    }

});
```

Keuntungan:

* Kode lebih singkat.
* Lebih hemat memori.
* Tetap bekerja untuk elemen yang dibuat secara dinamis.

---

## Kesimpulan

Event digunakan untuk mendeteksi interaksi pengguna pada halaman web.

Dengan Event, JavaScript dapat:

* Merespon klik tombol.
* Membaca input pengguna.
* Mengelola form.
* Merespon keyboard.
* Merespon pergerakan mouse.
* Mencegah perilaku bawaan browser.
* Menjalankan program secara interaktif.

Event merupakan dasar untuk membuat website yang responsif dan interaktif.
