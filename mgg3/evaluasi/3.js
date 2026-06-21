function buatBank(namaBank) {
    let rekening = [];
    let transaksi = [];
    let nomorTerakhir = 1000;

    function cariRekening(nomor) {
        for (let i = 0; i < rekening.length; i++) {
            if (rekening[i].nomor === nomor) {
                return rekening[i];
            }
        }
        return null;
    }
    return {
        buatRekening: function (nama, saldoAwal) {
            nomorTerakhir++;

            let dataBaru = {
                nomor: nomorTerakhir,
                nama: nama,
                saldo: saldoAwal
            };
            rekening.push(dataBaru);

            transaksi.push({
                jenis: "buat rekening",
                nama: nama,
                waktu: new Date()
            });
            console.log("rekening berhasil dibuat");
            console.log(dataBaru);
        },
        setor: function (nomor, jumlah) {
            let data = cariRekening(nomor);

            if (data === null) {
                console.log("rekening tidak ditemukan");
            } else {
                data.saldo += jumlah;

                transaksi.push({
                    jenis: "setor",
                    nomor: nomor,
                    jumlah: jumlah,
                    waktu: new Date()
                });
                console.log("setor berhasil");
            }
        },
        tarik: function (nomor, jumlah) {
            let data = cariRekening(nomor);
            if (data === null) {
                console.log("rekening tidak ditemukan");
            } else if (data.saldo < jumlah) {
                console.log("saldo tidak cukup");
            } else {
                data.saldo -= jumlah;
                transaksi.push({
                    jenis: "tarik",
                    nomor: nomor,
                    jumlah: jumlah,
                    waktu: new Date()
                });

                console.log("tarik berhasil");
            }
        },
        transfer: function (dari, ke, jumlah) {
            let pengirim = cariRekening(dari);
            let penerima = cariRekening(ke);
            if (pengirim === null || penerima === null) {
                console.log("rekening tidak ditemukan");
            } else if (pengirim.saldo < jumlah) {
                console.log("saldo tidak cukup");
            } else {
                pengirim.saldo -= jumlah;
                penerima.saldo += jumlah;
                transaksi.push({
                    jenis: "transfer",
                    dari: dari,
                    ke: ke,
                    jumlah: jumlah,
                    waktu: new Date()
                });
                console.log("transfer berhasil");
            }
        },
        laporan: function () {
            console.log("_____________ laporan " + namaBank + " ______");
            console.log("data rekening:", rekening);
            console.log("riwayat transaksi:", transaksi);
        }
    };
}
const bank = buatBank("Bank Faiz");

bank.buatRekening("rijaldi", 100000);
bank.buatRekening("hilmi", 50000);

bank.setor(1001, 25000);
bank.tarik(1002, 10000);
bank.transfer(1001, 1002, 30000);

bank.laporan();