const penjualan = {
    Januari: 100000,
    Februari: 120000,
    Maret: 90000,
    April: 150000,

    analisis: function () {
        let bulan = Object.keys(this);
        let nilai = Object.values(this);

        bulan.pop();
        nilai.pop();

        let total = 0;
        let tertinggi = nilai[0];
        let bulanTertinggi = bulan[0];

        for (let i = 0; i < nilai.length; i++) {
            total = total + nilai[i];

            if (nilai[i] > tertinggi) {
                tertinggi = nilai[i];
                bulanTertinggi = bulan[i];
            }
        }

        console.log("Total penjualan: Rp" + total);
        console.log("Rata-rata penjualan: Rp" + total / nilai.length);
        console.log("Bulan tertinggi: " + bulanTertinggi);
        console.log("Nilai tertinggi: Rp" + tertinggi);
    }
};

penjualan.analisis();