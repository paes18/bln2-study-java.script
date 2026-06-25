function ambilProfil(user) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                id: user.id,
                nama: user.nama,
                premium: user.premium
            });
        }, 1000);
    });
}
async function prosesBertahap() {
    try {
        const user = await login("budi", "123");
        console.log("1. Login berhasil");

        const profil = await ambilProfil(user);
        console.log("2. Profil:", profil);

        const kursus = await ambilKursus();
        console.log("3. Kursus:", kursus);

        const nilai = await ambilNilaiSiswa(user.id);
        console.log("4. Nilai:", nilai.nilai);
    } catch (error) {
        console.log("Proses berhenti:", error);
    }
}

prosesBertahap();
