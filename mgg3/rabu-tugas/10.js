function analisisTeks(teks) {
    let jumlahKarakter = teks.length;
    let jumlahKata = teks.trim().split(" ").length;
    let jumlahVokal = 0;
    let jumlahKonsonan = 0;
    let jumlahAngka = 0;
    let jumlahSpasi = 0;
    let adaSimbol = false;

    let kata = teks.split(" ");
    let kataTerpanjang = kata[0];

    let hurufVokal = "aiueoAIUEO";

    for (let i = 0; i < teks.length; i++) {
        let karakter = teks[i];

        if (karakter == " ") {
            jumlahSpasi++;
        } else if (karakter >= "0" && karakter <= "9") {
            jumlahAngka++;
        } else if (
            (karakter >= "a" && karakter <= "z") ||
            (karakter >= "A" && karakter <= "Z")
        ) {
            if (hurufVokal.includes(karakter)) {
                jumlahVokal++;
            } else {
                jumlahKonsonan++;
            }
        } else {
            adaSimbol = true;
        }
    }

    for (let i = 0; i < kata.length; i++) {
        if (kata[i].length > kataTerpanjang.length) {
            kataTerpanjang = kata[i];
        }
    }

    return {
        jumlahKarakter: jumlahKarakter,
        jumlahKata: jumlahKata,
        jumlahHurufVokal: jumlahVokal,
        jumlahHurufKonsonan: jumlahKonsonan,
        jumlahAngka: jumlahAngka,
        jumlahSpasi: jumlahSpasi,
        adaSimbolKhusus: adaSimbol,
        kataTerpanjang: kataTerpanjang
    };
}
console.log(analisisTeks("Aku belajar JavaScript 2026!"));
console.log(analisisTeks("Faiz sedang mengerjakan tugas."));
console.log(analisisTeks("Harga barang 15000 rupiah."));