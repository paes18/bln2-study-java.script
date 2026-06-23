import { hewan } from "./data.js";

let pity = 0;

function ambilHewan(rarity) {
    let pilihan = [];

    for (let i = 0; i < hewan.length; i++) {
        if (hewan[i].rarity === rarity) {
            pilihan.push(hewan[i]);
        }
    }

    let indexRandom = parseInt(Math.random() * pilihan.length);

    return pilihan[indexRandom];
}

export function pull() {
    pity++;

    let angka = Math.random() * 100;
    let rarity;

    if (pity > 30) {
        rarity = "Legendary";
    } else if (angka < 60) {
        rarity = "Common";
    } else if (angka < 85) {
        rarity = "Rare";
    } else if (angka < 95) {
        rarity = "Epic";
    } else {
        rarity = "Legendary";
    }

    if (rarity === "Legendary") {
        pity = 0;
    }

    return ambilHewan(rarity);
}

export function pullTen() {
    let hasil = [];

    for (let i = 0; i < 10; i++) {
        hasil.push(pull());
    }

    return hasil;
}

export function getPity() {
    return pity;
}

export function resetPity() {
    pity = 0;
}