# Bab 18: Modularisasi JavaScript

## Pengertian Modularisasi

Modularisasi adalah teknik memecah kode JavaScript ke dalam beberapa file agar lebih rapi, mudah dibaca, dan mudah dikelola.

Tujuan modularisasi adalah menghindari file JavaScript yang terlalu besar dan memisahkan setiap bagian program sesuai tugasnya masing-masing.

---

## Export dan Import

Agar fungsi atau variabel dari satu file dapat digunakan di file lain, digunakan:

* `export`
* `import`

Contoh:

### matematika.js

```javascript
export function tambah(a, b) {
    return a + b;
}
```

### app.js

```javascript
import { tambah } from "./matematika.js";

console.log(tambah(5, 3));
```

---

## Named Export

Named Export digunakan ketika satu file memiliki lebih dari satu data atau fungsi yang ingin dibagikan.

Contoh:

```javascript
export function tambah(a, b) {
    return a + b;
}

export function kurang(a, b) {
    return a - b;
}

export const pajak = 0.11;
```

Cara import:

```javascript
import { tambah, kurang, pajak } from "./matematika.js";
```

Ciri-ciri:

* Bisa lebih dari satu export dalam satu file.
* Saat import wajib menggunakan `{}`.
* Nama harus sama dengan yang diekspor.

---

## Default Export

Default Export digunakan ketika file hanya memiliki satu fungsi atau data utama.

Contoh:

```javascript
export default function login() {
    console.log("login berhasil");
}
```

Cara import:

```javascript
import login from "./login.js";
```

Ciri-ciri:

* Hanya boleh satu dalam satu file.
* Tidak perlu `{}` saat import.
* Nama bebas ditentukan saat import.

---

## Alias Import

Import dapat diberi nama lain menggunakan `as`.

Contoh:

```javascript
import { tambah as hitung } from "./matematika.js";

console.log(hitung(10, 5));
```

Fungsi:

* Mempermudah penamaan.
* Menghindari konflik nama variabel.

---

## Import Semua Isi File

Kita dapat mengambil seluruh isi file sekaligus.

Contoh:

```javascript
import * as Matematika from "./matematika.js";

console.log(Matematika.tambah(5, 5));
```

---

## Mengaktifkan Module di HTML

Agar sistem import dan export bekerja, tag script harus menggunakan:

```html
<script type="module" src="app.js"></script>
```

Tanpa `type="module"`, JavaScript tidak dapat menggunakan import dan export.

---

## Struktur Proyek Modular

Contoh struktur folder:

```text
proyek/
│
├── index.html
│
└── js/
    ├── app.js
    ├── kalkulasi.js
    └── validasi.js
```

Keterangan:

* `app.js` → file utama.
* `kalkulasi.js` → berisi perhitungan.
* `validasi.js` → berisi validasi data.

---

## Keuntungan Modularisasi

* Kode lebih rapi.
* Mudah diperbaiki.
* Mudah dikembangkan.
* Mengurangi duplikasi kode.
* Setiap file memiliki tugas yang jelas.

---

## Kesimpulan

Modularisasi digunakan untuk membagi program menjadi beberapa file yang lebih kecil.

Konsep penting pada modularisasi:

* `export` → membagikan fungsi atau variabel.
* `import` → menggunakan fungsi atau variabel dari file lain.
* `Named Export` → menggunakan `{}` saat import.
* `Default Export` → tidak menggunakan `{}` saat import.
* `type="module"` → mengaktifkan sistem modul pada HTML.

Modularisasi sangat membantu dalam pembuatan aplikasi JavaScript yang besar agar kode tetap terstruktur dan mudah dikelola.
