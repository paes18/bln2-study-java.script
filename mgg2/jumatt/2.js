const dompet = {
    pemilik: "Faiz",
    saldo: 90000,
    topUp: function (jumlah) {
        this.saldo = this.saldo + jumlah;
        console.log("Top up Rp" + jumlah + " berhasil.");
    },

    bayar: function (jumlah) {
        if (this.saldo >= jumlah) {
            this.saldo = this.saldo - jumlah;
            console.log("Bayar Rp" + jumlah + " berhasil.");
        } else {
            console.log("Transaksi gagal, saldo tidak cukup.");
        }
    },

    cekSaldo: function () {
        console.log("Saldo " + this.pemilik + " sekarang: Rp" + this.saldo);
    }
};

dompet.cekSaldo();
dompet.topUp(30000);
dompet.cekSaldo();
dompet.bayar(60000);
dompet.cekSaldo();
dompet.bayar(50000);
dompet.cekSaldo();
dompet.bayar(10000);
dompet.cekSaldo();
dompet.bayar(4000);
dompet.cekSaldo();