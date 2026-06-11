function statistikNilai() {
    let nilai = [80, 90, 75, 100, 60];
    let total = nilai.reduce(function(jumlah, item) {
        return jumlah + item;
    }, 0);
    let rataRata = total / nilai.length;
    let tertinggi = Math.max(...nilai);
    let terendah = Math.min(...nilai);
    console.log("Total nilai:", total);
    console.log("Rata-rata:", rataRata);
    console.log("Nilai tertinggi:", tertinggi);
    console.log("Nilai terendah:", terendah);
}
statistikNilai();