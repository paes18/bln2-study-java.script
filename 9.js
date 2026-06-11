function rankingNilai() {
    let nilai = [78, 95, 62, 88, 70, 100];
    let urut = nilai.slice().sort(function(a, b) {
        return b - a;  });
    let tigaTertinggi = urut.slice(0, 3);
    let duaTerendah = urut.slice(-2);
    console.log("Data asli:", nilai);
    console.log("Urut tertinggi ke terendah:", urut);
    console.log("3 nilai tertinggi:", tigaTertinggi);
    console.log("2 nilai terendah:", duaTerendah);
}
rankingNilai();