// masalah kode lama:
// function sistem() {
//     console.log(user);
//     var user = "Ari";

//     if (true) {
//         let score = 90;
//     }
//     fuction tampil() {
//         console.log(score)
//     }
// }
// 1. user dipanggil sebelum deklarasi var, hasilnya undefined
// 2. score dibuat dengan let di dalam if, jadi tidak bisa diakses di function tampil()
// 3. function tampil mencoba membaca score dari luar scope yang tidak tersedia
function sistem() {
    let user = "Ari";
    let score = 90;
    function tampil() {
        console.log("user:", user);
        console.log("score:", score);
    }
    tampil();
}
sistem();
// penjelasan:
// var terkena hoisting sehingga bisa dipanggil sebelum deklarasi, tapi nilainya undefined
// let memiliki block scope, jadi kalau dibuat di dalam if hanya bisa dipakai di dalam if
// perbaikan dilakukan dengan meletakkan user dan score di scope yang bisa dibaca function tampilb