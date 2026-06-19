function buatlaporansekolah(namasekolah, ...siswa) {
    let totalnilai = 0;
    let siswatertinggi = siswa[0];
    let siswaterendah = siswa[0];
    let daftarnama = [];
    for (let i = 0; i < siswa.length; i++) {
        const { nama, nilai, kelas } = siswa[i];

        totalnilai += nilai;
        daftarnama.push(nama);

        if (nilai > siswatertinggi.nilai) {
            siswatertinggi = siswa[i];
        }

        if (nilai < siswaterendah.nilai) {
            siswaterendah = siswa[i];
        }
    }
    const ratarata = totalnilai / siswa.length;
    const [namapertama] = daftarnama;
    const salinansiswa = [...siswa];

    console.log("nama sekolah:", namasekolah);
    console.log("jumlah siswa:", siswa.length);
    console.log("rata-rata nilai:", ratarata);
    console.log("siswa tertinggi:", siswatertinggi);
    console.log("siswa terendah:", siswaterendah);
    console.log("daftar nama siswa:", daftarnama);
    console.log("nama siswa pertama:", namapertama);
    console.log("salinan data siswa:", salinansiswa);
}
buatlaporansekolah(
    "PIT",
    { nama: "jaldi", nilai: 80, kelas: "24 A" },
    { nama: "faiz", nilai: 90, kelas: "24 A" },
    { nama: "yuda", nilai: 75, kelas: "24 A" }
);