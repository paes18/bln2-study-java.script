 const mahasiswa = {
    nama: "Faiz",
     nim: "23104567",
    jurusan: "programming-PIT",
    angkatan: 24,

    perkenalan: function () {
        console.log(
            "Halo, nama saya " + this.nama +
            ", NIM saya " + this.nim +
            ", saya dari jurusan " + this.jurusan +
            " angkatan " + this.angkatan + "."
        );
    }
};

mahasiswa.perkenalan();