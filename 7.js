function perpustakaanMini() {
    let buku = ["Laskar Pelangi", "Bumi", "Dilan", "Ayat-Ayat Cinta"];
    buku.push("Negeri 5 Menara");
    buku = buku.filter(function(item) {
        return item !== "Dilan"; });
    let tersedia = buku.includes("Bumi");
    console.log("Apakah buku Bumi tersedia?", tersedia);
    console.log("Daftar buku:", buku);
}
perpustakaanMini();