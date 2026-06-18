let produk = [
    {
        nama: "Susu",
        kadaluarsa: "2026-12-31"
    },
    {
        nama: "Roti",
        kadaluarsa: "2025-01-01"
    }
];

let sekarang = new Date();

for (let i = 0; i < produk.length; i++) {

    let exp = new Date(produk[i].kadaluarsa);

    if (exp < sekarang) {
        console.log(produk[i].nama + " sudah kadaluarsa");
    } else {

        let sisaHari = parseInt(
            (exp - sekarang) / (1000 * 60 * 60 * 24)
        );

        console.log(
            produk[i].nama +
            " tersisa " +
            sisaHari +
            " hari"
        );
    }
}