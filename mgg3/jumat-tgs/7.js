const akun = {
    nama: "faiz",
    email: "faiz28@email.com"
};
const profil = {
    umur: 20,
    kota: "palu"
};
const pengguna = {
    ...akun,
    ...profil
};
console.log(pengguna);