const party = [
    {
        nama: "belerick",
        role: "Tank",
        hp: 3000
    },
    {
        nama: "kadita",
        role: "Mage",
        hp: 1500
    },
    {
        nama: "angela",
        role: "Support",
        hp: 1800
    }
];
function buatPartyBaru(namaParty, ...anggota) {
    const anggotaBaru = [...anggota];

    console.log("nama party:", namaParty);
    for (let i = 0; i < anggotaBaru.length; i++) {
        const { nama, role, hp } = anggotaBaru[i];
        console.log("nama:", nama);
        console.log("role:", role);
        console.log("hp:", hp);
        console.log("----------------");
    }
}
buatPartyBaru("party onic", ...party);

console.log("data party asli:");
console.log(party);