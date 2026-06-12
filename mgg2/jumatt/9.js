const bank = {
    nasabah: [],

    tambahNasabah: function (nama, saldo) {
        this.nasabah.push({
            nama: nama,
            saldo: saldo
        });

        console.log("Nasabah baru ditambahkan: " + nama);
    },

    cariNasabah: function (nama) {
        for (let i = 0; i < this.nasabah.length; i++) {
            if (this.nasabah[i].nama === nama) {
                return this.nasabah[i];
            }
        }

        return null;
    },

    transfer: function (pengirim, penerima, jumlah) {
        let dataPengirim = this.cariNasabah(pengirim);
        let dataPenerima = this.cariNasabah(penerima);

        if (dataPengirim === null || dataPenerima === null) {
            console.log("Transfer gagal, nasabah tidak ditemukan.");
        } else if (dataPengirim.saldo < jumlah) {
            console.log("Transfer gagal, saldo tidak cukup.");
        } else {
            dataPengirim.saldo = dataPengirim.saldo - jumlah;
            dataPenerima.saldo = dataPenerima.saldo + jumlah;

            console.log("Transfer dari " + pengirim + " ke " + penerima + " sebesar Rp" + jumlah + " berhasil.");
        }
    },

    tampilkanNasabah: function () {
        console.log("---Data Nasabah ---");

        for (let data of this.nasabah) {
            console.log(data.nama + " - Saldo: Rp" + data.saldo);
        }
    }
};

bank.tambahNasabah("Faiz", 100000);
bank.tambahNasabah("rijaldi", 50000);
bank.tambahNasabah("yuda", 75000);

bank.tampilkanNasabah();

bank.transfer("Faiz", "rijaldi", 30000);

bank.tampilkanNasabah();