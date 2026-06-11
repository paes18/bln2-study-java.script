function analisisNama() {
    let nama = ["Andi", "Budi", "Citra", "Dewi", "Asep", "Aulia"];
    let awalanA = nama.filter(function(item) {
     return item[0] === "A"; });
    let lebihDari4 = nama.filter(function(item) {
     return item.length > 4;  });
    console.log("Nama diawali huruf A:", awalanA);
    console.log("Jumlah nama diawali A:", awalanA.length);
    console.log("Nama lebih dari 4 huruf:", lebihDari4);
}
analisisNama();