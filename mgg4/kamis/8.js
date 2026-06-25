async function tampilkanPenggunaDanKursus() {
    let mulai = new Date().getTime();
    const hasil = await Promise.all([
        ambilPengguna(1),
        ambilKursus()
    ]);

    let selesai = new Date().getTime();
    let waktu = (selesai - mulai) / 1000;

    console.log("Pengguna:", hasil[0]);
    console.log("Kursus:", hasil[1]);
    console.log("Waktu:", waktu + " detik");
}
tampilkanPenggunaDanKursus();
