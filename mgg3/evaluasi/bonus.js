function buatKasir(namaToko) {
    let riwayat = [];
    return {
        transaksi: function (namaPembeli, ...barang) {
            let total = 0;
            let daftarBarang = [];

            for (let i = 0; i < barang.length; i++) {
                const { nama, harga, jumlah } = barang[i];

                let subtotal = harga * jumlah;
                total += subtotal;

                daftarBarang.push({
                    nama: nama.toUpperCase(),
                    harga: Number(harga.toFixed(2)),
                    jumlah: jumlah,
                    subtotal: subtotal
                });
            }
            let struk = {
                toko: namaToko,
                pembeli: namaPembeli,
                barang: [...daftarBarang],
                total: total,
                waktu: new Date()
            };
            riwayat.push(struk);

            console.log("_____ struk belanja _____");
            console.log(struk);
        },
        laporan: function () {
            console.log("_____ riwayat transaksi _____");
            console.log(riwayat);
        }
    };
}
const kasir = buatKasir("Toko budee");

kasir.transaksi(
    "Faiz",
    { nama: "indomie", harga: 5000, jumlah: 1 },
    { nama: "es-cekek", harga: 3000, jumlah: 3 },
    { nama: "roti", harga: 2000, jumlah: 1 }
);
kasir.laporan(); 