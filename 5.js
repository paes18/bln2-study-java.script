function hitungDiskon() {
    let harga = [10000, 25000, 50000, 120000];
    let hargaDiskon = harga.map(function(item) {
        return item - (item * 10 / 100);
    });
    console.log("Harga sebelum diskon:", harga);
    console.log("Harga setelah diskon:", hargaDiskon);
}
hitungDiskon();