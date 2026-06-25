function cekPremium(user) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (user.premium === true) {
                resolve("Mengakses fitur premium...");
            } else {
                reject("Fitur premium tidak tersedia.");
            }
        }, 1500);
    });
}
async function aksesPremium() {
    try {
        const user = await login("budi", "123");
        console.log("Login berhasil:", user.nama);
        const hasil = await cekPremium(user);
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}
aksesPremium();