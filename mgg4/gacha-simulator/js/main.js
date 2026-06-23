import { pull, pullTen, getPity, resetPity } from "./gacha.js";

const btnPull1 = document.getElementById("pull1");
const btnPull10 = document.getElementById("pull10");
const btnReset = document.getElementById("reset");

const hasil = document.getElementById("hasil");

const totalText = document.getElementById("total");
const commonText = document.getElementById("common");
const rareText = document.getElementById("rare");
const epicText = document.getElementById("epic");
const legendaryText = document.getElementById("legendary");
const pityText = document.getElementById("pity");

let statistik = {
    total: 0,
    Common: 0,
    Rare: 0,
    Epic: 0,
    Legendary: 0
};

function updateStatistik(karakter) {
    statistik.total++;
    statistik[karakter.rarity]++;
}

function tampilkanStatistik() {
    totalText.textContent = statistik.total;
    commonText.textContent = statistik.Common;
    rareText.textContent = statistik.Rare;
    epicText.textContent = statistik.Epic;
    legendaryText.textContent = statistik.Legendary;
    pityText.textContent = getPity();
}

function tampilkanHasil(karakter) {
    const card = document.createElement("div");

    card.classList.add("card");
    card.classList.add(karakter.rarity.toLowerCase());

    const gambar = document.createElement("img");

    // foto hewan diambil dari data.js bagian gambar
    gambar.src = karakter.gambar;

    gambar.alt = karakter.nama;

    const nama = document.createElement("p");
    nama.textContent = "[" + karakter.rarity.toUpperCase() + "] " + karakter.nama;

    card.append(gambar);
    card.append(nama);

    hasil.prepend(card);
}

btnPull1.addEventListener("click", function () {
    const karakter = pull();

    updateStatistik(karakter);
    tampilkanHasil(karakter);
    tampilkanStatistik();
});

btnPull10.addEventListener("click", function () {
    const hasilPull = pullTen();

    for (let i = 0; i < hasilPull.length; i++) {
        updateStatistik(hasilPull[i]);
        tampilkanHasil(hasilPull[i]);
    }

    tampilkanStatistik();
});

btnReset.addEventListener("click", function () {
    statistik = {
        total: 0,
        Common: 0,
        Rare: 0,
        Epic: 0,
        Legendary: 0
    };

    hasil.innerHTML = "";

    resetPity();
    tampilkanStatistik();
});

tampilkanStatistik();