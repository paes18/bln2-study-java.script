function cariNilai() {
    let angka = [12, 5, 7, 20, 9];
    let ditemukan = angka.includes(20);
    let posisi = angka.indexOf(20);
    if (ditemukan) {
        console.log("Angka 20 ditemukan");
        console.log("Posisi indeks:", posisi);
    } else {
        console.log("Angka 20 tidak ditemukan");
    }
}
cariNilai();