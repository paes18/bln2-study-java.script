async function tampilkanProfil(id) {
    try {
        const profil = await ambilPengguna(id);

        console.log("Profil ditemukan");
        console.log("Nama:", profil.nama);
        console.log("Premium:", profil.premium);
    } catch (error) {
        console.log("Error:", error);
    } finally {
        console.log("Proses telah selesai");
    }
}
tampilkanProfil(99);