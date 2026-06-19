function checkout(...barang) {
    console.log("jumlah barang:", barang.length);

    console.log("daftar barang:");
    console.log(barang);

    console.log("barang pertama:");
    console.log(barang[0]);
}
checkout(
    "Buku",
    "Pensil",
    "Penghapus"
);