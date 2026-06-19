const karakter = {
    nama: "lancelot",
    level: 10,
    attack: 100,
    defense: 80
};
const karakterupgrade = {
    ...karakter,
    level: 11,
    attack: 120,
    defense: 90
};
console.log("data asli:");
console.log(karakter);

console.log("data upgrade:");
console.log(karakterupgrade);