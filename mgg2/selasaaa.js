//soal ke 1
/*
let jam = 10;
let biaya;

if (jam <= 2) {
    biaya = jam * 3000;
} else {
    biaya = (2 * 3000) + ((jam - 2) * 2000);
}

if (biaya > 25000) {
    biaya = 25000;
}

console.log("Biaya parkir = Rp" + biaya);

//soal ke 2////////////////////////////////////////////////////////////////////////////
for (let i = 1; i <= 5; i++) {

    let hasil = "";

    for (let j = 1; j <= i; j++) {
        hasil = hasil + j;
    }

    console.log(hasil);
}

//soal ke 3///////////////////////////////////////////////////////////////
// Saldo awal
let saldo = 100000;

// Daftar transaksi
let transaksi = [
  { tipe: "tarik", jumlah: 20000 },
  { tipe: "setor", jumlah: 50000 },
  { tipe: "tarik", jumlah: 30000 },
  { tipe: "tarik", jumlah: 150000 }
];

// looping untuk memproses transaksi
for (let i = 0; i < transaksi.length; i++) {

  console.log("Transaksi ke-" + (i + 1));

  if (transaksi[i].tipe === "setor") {
    saldo += transaksi[i].jumlah;
    console.log("Setor Rp" + transaksi[i].jumlah);
    console.log("Saldo sekarang: Rp" + saldo);

  } else if (transaksi[i].tipe === "tarik") {

    if (saldo >= transaksi[i].jumlah) {
      saldo -= transaksi[i].jumlah;
      console.log("Tarik Rp" + transaksi[i].jumlah);
      console.log("Saldo sekarang: Rp" + saldo);

    } else {
      console.log("Tarik Rp" + transaksi[i].jumlah);
      console.log("Transaksi gagal! Saldo tidak mencukupi.");
      console.log("Saldo tetap: Rp" + saldo);
    }
  }

  console.log("--------------------");
}

//soal ke 4////////////////////////////////////////////////////////

for (let i = 1; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}

//soal ke 5/////////////////////////////////////////////////////////////////////////
let password = "faiz0088";

if (password.length >= 8) {
    console.log("Password Valid");
} else {
    console.log("Password Tidak Valid");
}

//soal ke 6////////////////////////////////////////////////////////////////////////////

let angkaRahasia = 27;
let percobaan = 0;

for (let i = 1; i <= 100; i++) {

    percobaan++;

    console.log(i);

    if (i === angkaRahasia) {
        console.log("Angka ditemukan: " + i);
        console.log("Jumlah percobaan: " + percobaan);
        
    }

}

//soal ke 7 /////////////////////////////////////////////////////////////////////////////
let daftarBelanja = [ 100000, 250000, 500000];

for (let i = 0; i < daftarBelanja.length; i++) {

    let belanja = daftarBelanja[i];
    let diskon = 0;

    if (belanja >= 500000) {
        diskon = 20;
    } else if (belanja >= 250000) {
        diskon = 10;
    } else if (belanja >= 100000) {
        diskon = 5;
    } else {
        diskon = 0;
    }

    let bayar = belanja - (belanja * diskon / 100);

    console.log("Belanja = " + belanja);
    console.log("Diskon = " + diskon + "%");
    console.log("Total bayar = " + bayar);
    console.log("------------------");
}

//soal ke 8////////////////////////////////////////////////////////////////////////
let nilai = [90, 75, 60, 85, 50, 100, 70];

let jumlahSiswa = nilai.length;
let tertinggi = nilai[0];
let terendah = nilai[0];
let total = 0;
let lulus = 0;
let tidakLulus = 0;

for (let i = 0; i < nilai.length; i++) {

    total += nilai[i];

    if (nilai[i] > tertinggi) {
        tertinggi = nilai[i];
    }

    if (nilai[i] < terendah) {
        terendah = nilai[i];
    }

    if (nilai[i] >= 75) {
        lulus++;
    } else {
        tidakLulus++;
    }
}

let rataRata = total / jumlahSiswa;

console.log("Jumlah siswa = " + jumlahSiswa);
console.log("Nilai tertinggi = " + tertinggi);
console.log("Nilai terendah = " + terendah);
console.log("Rata-rata nilai = " + rataRata);
console.log("Jumlah lulus = " + lulus);
console.log("Jumlah tidak lulus = " + tidakLulus);

//soal ke 9/////////////////////////////////////////////////////////////////////////

for (let i = 5; i >= 1; i--) {

    let bintang = "";

    for (let j = 1; j <= i; j++) {
        bintang = bintang + "*";
    }

    console.log(bintang);
}*/

//soal ke 10/////////////////////////////////////////////////////////////////////////////////////

let jumlahSpesial = 0;
for (let i = 1; i <= 100; i++) {
    if ((i % 2 == 0 && i % 4 != 0) || i % 7 == 0) {
        console.log(i);
        jumlahSpesial++;
    }
}
console.log("Jumlah bilangan spesial = " + jumlahSpesial);
