async function tampilkanPengguna(id) {
    try {
        const data = await ambilPengguna(id);

        console.log("Nama:", data.nama);
        console.log("Premium:", data.premium);
    } catch (error) {
        console.log(error);
    }
}
tampilkanPengguna(2);
 