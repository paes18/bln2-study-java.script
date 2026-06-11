function cekKelulusan() {
    let nilai = [90, 65, 75, 40, 88, 70, 55];
    let lulus = nilai.filter(function(item) {
        return item >= 75;
    });
    let tidakLulus = nilai.filter(function(item) {
        return item < 75;
    });
    console.log("Nilai lulus:", lulus);
    console.log("Nilai tidak lulus:", tidakLulus);
    console.log("Jumlah lulus:", lulus.length);
    console.log("Jumlah tidak lulus:", tidakLulus.length);
}
cekKelulusan();