async function versiBerurutan() {
    let mulai = new Date().getTime();

    const profil = await ambilPengguna(1);
    const kursus = await ambilKursus();
    const nilai = await ambilNilaiSiswa(1);

    let selesai = new Date().getTime();

    console.log("Versi A berurutan");
    console.log(profil, kursus, nilai);
    console.log("Waktu:", (selesai - mulai) / 1000 + " detik");
}

async function versiParalel() {
    let mulai = new Date().getTime();

    const hasil = await Promise.all([
        ambilPengguna(1),
        ambilKursus(),
        ambilNilaiSiswa(1)
    ]);

    let selesai = new Date().getTime();

    console.log("Versi B paralel");
    console.log(hasil);
    console.log("Waktu:", (selesai - mulai) / 1000 + " detik");
}

versiBerurutan();
versiParalel();

// kesimpulan soal 14:
// versi berurutan lebih lama karena menunggu satu per satu
// versi Promise.all lebih cepat karena proses berjalan bersama
