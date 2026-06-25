console.log("-_-_-_-program a-_-_-_-_---");
console.log("Mulai Belajar");
console.log("Mengerjakan Tugas");
console.log("Selesai");

console.log("_-_-_-_ program b _-_-_-_-");
console.log("Mulai Belajar");

setTimeout(function () {
    console.log("Mengunduh Materi");
}, 3000);

console.log("Selesai");

// perbedaannya:
// program a berjalan urut dari atas ke bawah
// program b tidak menunggu setTimeout selesai, jadi "selesai" muncul duluan