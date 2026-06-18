function buatDompet(saldoAwal) {
    let saldo = saldoAwal;

    return {
        tambahSaldo: function (jumlah) {
            saldo += jumlah;
        },

        kurangiSaldo: function (jumlah) {
            saldo -= jumlah;
        },

        cekSaldo: function () {
            console.log("saldo:", saldo);
        }
    };
}
console.log("saldo saat ini")
const dompet = buatDompet(100000);

dompet.cekSaldo();
console.log("isi saldo 50000")
console.log("saldo saat ini")
dompet.tambahSaldo(50000);
dompet.cekSaldo();
console.log("pengeluaran 25000")
console.log("saldo saat ini")
dompet.kurangiSaldo(25000);
dompet.cekSaldo();