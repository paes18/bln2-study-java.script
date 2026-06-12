const nilaiSiswa = {
    gibran: 80,
    rijaldi: 90,
    yuda: 75,
    hilmi: 88,

    tampilkanData: function () {
        let nama = Object.keys(this);
        let nilai = Object.values(this);

        nama.pop();
        nilai.pop();

        console.log("Nama siswa:", nama);
        console.log("Nilai siswa:", nilai);

        let total = 0;
        let tertinggi = nilai[0];

        for (let i = 0; i < nilai.length; i++) {
            total = total + nilai[i];

            if (nilai[i] > tertinggi) {
                tertinggi = nilai[i];
            }
        }

        console.log("Rata-rata nilai: " + total / nilai.length);
        console.log("Nilai tertinggi: " + tertinggi);
    }
};

nilaiSiswa.tampilkanData();