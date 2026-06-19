const user = {
    nama: "rijaldi",
    umur: 19,
    kota: "ambon"
};
const userBaru = {
    ...user,
    umur: 21,
    kota: "yogyakarta"
};
console.log(user);
console.log(userBaru);