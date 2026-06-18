const kendaraan = {
    plat: "DN 0088 AB",
    masuk: new Date("2026-06-18 08:00:00"),
    keluar: new Date("2026-06-18 13:00:00")
};

let lamaJam = parseInt(
    (kendaraan.keluar - kendaraan.masuk) /
    (1000 * 60 * 60)
);

let biaya;

if (lamaJam <= 2) {
    biaya = 3000;
} else {
    biaya = 3000 + ((lamaJam - 2) * 2000);
}

console.log("plat:", kendaraan.plat);
console.log("lama parkir:", lamaJam, "jam");
console.log("biaya:", biaya);