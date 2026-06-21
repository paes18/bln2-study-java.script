function analisisDokumen(teks = "", ...catatan) {
    if (teks === "") {
        return {
            jumlahKarakter: 0,
            jumlahKata: 0,
            jumlahKalimat: 0,
            jumlahAngka: 0,
            angkaTerbesar: 0,
            angkaTerkecil: 0,
            kataTerpanjang: "",
            rataRataPanjangKata: 0
        };
    }
    const jumlahKarakter = teks.length;

    const daftarKata = teks.split(" ");
    const jumlahKata = daftarKata.length;

    let jumlahKalimat = 0;

    for (let i = 0; i < teks.length; i++) {
        if (teks[i] === ".") {
            jumlahKalimat++;
        }
    }
    let daftarAngka = [];
    let totalPanjangKata = 0;
    let kataTerpanjang = "";

    for (let i = 0; i < daftarKata.length; i++) {
        let kata = daftarKata[i]
            .replace(".", "")
            .replace(",", "")
            .replace("%", "");

        totalPanjangKata += kata.length;

        if (kata.length > kataTerpanjang.length) {
            kataTerpanjang = kata;
        }
        let angka = Number(kata);
        if (
            kata !== "" &&
            angka.toString() === kata
        ) {
            daftarAngka.push(angka);
        }
    }
    let angkaTerbesar = daftarAngka[0];
    let angkaTerkecil = daftarAngka[0];

    for (let i = 0; i < daftarAngka.length; i++) {

        if (daftarAngka[i] > angkaTerbesar) {
            angkaTerbesar = daftarAngka[i];
        }
        if (daftarAngka[i] < angkaTerkecil) {
            angkaTerkecil = daftarAngka[i];
        }
    }
    let rataRataPanjangKata =
        totalPanjangKata / jumlahKata;
    return {
        jumlahKarakter: jumlahKarakter,
        jumlahKata: jumlahKata,
        jumlahKalimat: jumlahKalimat,
        jumlahAngka: daftarAngka.length,
        angkaTerbesar: angkaTerbesar,
        angkaTerkecil: angkaTerkecil,
        kataTerpanjang: kataTerpanjang,
        rataRataPanjangKata: Number(
            rataRataPanjangKata.toFixed(2)
        )
    };
}
console.log(
    analisisDokumen(
        "JavaScript 2026 sangat populer. Pada tahun 2025 pengguna meningkat 35%."
    )
);
console.log(analisisDokumen());
console.log(analisisDokumen(""));