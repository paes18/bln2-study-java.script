const barang = {
    namaBarang: "TWS",
    stok: 10,
    harga: 150000,

    tambahStok: function (jumlah) {
        this.stok = this.stok + jumlah;
        console.log("Stok ditambah " + jumlah);
        console.log("Stok sekarang: " + this.stok);
    },

    kurangiStok: function (jumlah) {
        if (this.stok >= jumlah) {
            this.stok = this.stok - jumlah;
            console.log("Stok dikurangi " + jumlah);
        } else {
            console.log("Stok tidak cukup.");
        }

        console.log("Stok sekarang: " + this.stok);
    },

    totalNilaiBarang: function () {
        let total = this.stok * this.harga;
        console.log("Total nilai barang: Rp" + total);
    }
};

console.log("Nama barang: " + barang.namaBarang);
console.log("Stok awal: " + barang.stok);

barang.tambahStok(5);
barang.kurangiStok(3);
barang.totalNilaiBarang();