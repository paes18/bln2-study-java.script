const hero = {
    nama: "GatotKaca",
    kelas: "Tank",
    level: 25,
    hp: 5000,
    mana: 800
};
const {
    nama,
    kelas,
    hp,
    mana: energi,
    guild = "onic"
} = hero;
console.log("nama:", nama);
console.log("kelas:", kelas);
console.log("hp:", hp);
console.log("energi:", energi);
console.log("guild:", guild);