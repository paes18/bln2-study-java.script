const kerajaan = {
    penduduk: [
        { nama: "Ari", energi: 90, makanan: 2, emas: 30, status: "aktif" },
        { nama: "Bima", energi: 60, makanan: 1, emas: 10, status: "aktif" },
        { nama: "Citra", energi: 50, makanan: 0, emas: 50, status: "aktif" },
        { nama: "Dewi", energi: 20, makanan: 4, emas: 5, status: "aktif" },
        { nama: "Eko", energi: 75, makanan: 0, emas: 20, status: "aktif" }
    ],
    

    simulasihari: function () {
                                       // fase-1-konsumsii
        for (let i = 0; i < this.penduduk.length; i++) {
            if (this.penduduk[i].status === "aktif") {
                if (this.penduduk[i].makanan > 0) {
                    this.penduduk[i].makanan--;
                    this.penduduk[i].energi += 10;
                } else {
                    this.penduduk[i].energi -= 20;
                }
            }
        }

                                                       // fase-2-status
        for (let i = 0; i < this.penduduk.length; i++) {
            if (this.penduduk[i].energi <= 0) {
                this.penduduk[i].status = "tumbang";
            }
        }

                                                      // fase-3-cari-makn
        for (let i = 0; i < this.penduduk.length; i++) {
            if (this.penduduk[i].status === "aktif") {
                if (this.penduduk[i].energi >= 80) {
                    this.penduduk[i].makanan += 3;
                } else if (this.penduduk[i].energi >= 50) {
                    this.penduduk[i].makanan += 2;
                } else if (this.penduduk[i].energi >= 30) {
                    this.penduduk[i].makanan += 1;
                }

                this.penduduk[i].energi -= 15;
            }
        }

                                                          // fase-4-pasar
        for (let i = 0; i < this.penduduk.length; i++) {
            if (this.penduduk[i].status === "aktif") {
                if (this.penduduk[i].makanan === 0 && this.penduduk[i].emas >= 10) {
                    this.penduduk[i].makanan++;
                    this.penduduk[i].emas -= 10;
                }
            }
        }

                                                            // fase-5-solid
        for (let i = 0; i < this.penduduk.length; i++) {
            if (this.penduduk[i].status === "aktif" && this.penduduk[i].makanan > 3) {
                let penerima = -1;

                for (let j = 0; j < this.penduduk.length; j++) {
                    if (i !== j && this.penduduk[j].status === "aktif") {
                        if (penerima === -1) {
                            penerima = j;
                        } else if (this.penduduk[j].makanan < this.penduduk[penerima].makanan) {
                            penerima = j;
                        } else if (
                            this.penduduk[j].makanan === this.penduduk[penerima].makanan &&
                            this.penduduk[j].energi < this.penduduk[penerima].energi
                        ) {
                            penerima = j;
                        }
                    }
                }

                if (penerima !== -1) {
                    this.penduduk[i].makanan--;
                    this.penduduk[penerima].makanan++;
                }
            }
        }
    },

    tampilkankondisi: function (hari) {
        console.log("_______ KONDISI HARI KE-" + hari + "__________________");

        for (let i = 0; i < this.penduduk.length; i++) {
            console.log(
                this.penduduk[i].nama +
                " | Energi: " + this.penduduk[i].energi +
                " | Makanan: " + this.penduduk[i].makanan +
                " | Emas: " + this.penduduk[i].emas +
                " | Status: " + this.penduduk[i].status
            );
        }

       
    },

    pendudukaktif: function () {
        return this.penduduk.filter(function (orang) {
            return orang.status === "aktif";
        });
    },

    penduduktumbang: function () {
        return this.penduduk.filter(function (orang) {
            return orang.status === "tumbang";
        });
    },

    pendudukterkaya: function () {
        let terkaya = this.penduduk[0];

        for (let i = 1; i < this.penduduk.length; i++) {
            if (this.penduduk[i].emas > terkaya.emas) {
                terkaya = this.penduduk[i];
            }
        }

        return terkaya;
    },

    pendudukterlapar: function () {
        let lapar = this.penduduk[0];

        for (let i = 1; i < this.penduduk.length; i++) {
            if (this.penduduk[i].makanan < lapar.makanan) {
                lapar = this.penduduk[i];
            }
        }

        return lapar;
    },

    laporan: function () {
        console.log("-___________ LAPORAN AKHIR KERAJAAN _______________-");
        console.log("Penduduk aktif:", this.pendudukaktif());
        console.log("Penduduk tumbang:", this.penduduktumbang());
        console.log("Penduduk terkaya:", this.pendudukterkaya());
        console.log("Penduduk paling lapar:", this.pendudukterlapar());
    }
};

kerajaan.tampilkankondisi(0);

for (let hari = 1; hari <= 8; hari++) {
    kerajaan.simulasihari();
    kerajaan.tampilkankondisi(hari);
}

kerajaan.laporan();