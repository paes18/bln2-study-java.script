async function dashboardSiswa(id) {
    try {
        const hasil = await Promise.all([
            ambilPengguna(id),
            ambilKursus(),
            ambilNilaiSiswa(id)
        ]);

        console.log("------ dashboard siswa -----");
        console.log("Nama:", hasil[0].nama);
        console.log("Premium:", hasil[0].premium);
        console.log("Kursus:", hasil[1]);
        console.log("Nilai:", hasil[2].nilai);
    } catch (error) {
        console.log(error);
    }
}

dashboardSiswa(1);