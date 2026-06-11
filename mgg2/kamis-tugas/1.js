// Soal 1 - Pengelola Daftar Belanja

function kelolaBelanja() {
    let belanja = ["Beras", "Telur", "Gula"];
    belanja.unshift ("minyak");
    belanja.unshift ("garam");
    belanja.pop();
    console.log("Daftar belanja terbaru:", belanja);
    console.log("Jumlah item:", belanja.length);
}
kelolaBelanja();

