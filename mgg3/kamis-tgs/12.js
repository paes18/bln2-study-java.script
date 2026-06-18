function hitungUmur(tanggalLahir) {

    let lahir = new Date(tanggalLahir);
    let sekarang = new Date();

    let selisih = sekarang - lahir;

    let hari = parseInt(selisih / (1000 * 60 * 60 * 24));
    let bulan = parseInt(hari / 30);
    let tahun = parseInt(hari / 365);

    console.log("umur tahun :", tahun);
    console.log("umur bulan :", bulan);
    console.log("umur hari  :", hari);
}

hitungUmur("2007-03-15");