function kasirSederhana() {
    let barang = [
        { nama: "Pensil", harga: 3000, jumlah: 2 },
        { nama: "Buku", harga: 5000, jumlah: 3 },
        { nama: "Penghapus", harga: 2000, jumlah: 1 }
    ];

    let total = 0;
    let barangTermahal = null;
    let subtotalTerbesar = 0;

    console.log("=== STRUK BELANJA ===");

    for (let i = 0; i < barang.length; i++) {

        let subtotal = barang[i].harga * barang[i].jumlah;

        console.log(
            barang[i].nama +
            " x" +
            barang[i].jumlah +
            " = Rp" +
            subtotal
        );

        total += subtotal;

        if (subtotal > subtotalTerbesar) {
            subtotalTerbesar = subtotal;
            barangTermahal = barang[i].nama;
        }
    }

    console.log("-------------------");
    console.log("Total Belanja = Rp" + total);
    console.log("Barang Termahal = " + barangTermahal);
    console.log("Subtotal Termahal = Rp" + subtotalTerbesar);
}

kasirSederhana();