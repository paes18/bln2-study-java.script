const databaseNilai = [
    { id: 1, nilai: 90 },
    { id: 2, nilai: 75 },
    { id: 3, nilai: 60 }
];
function ambilNilaiSiswa(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let dataNilai = null;
            for (let i = 0; i < databaseNilai.length; i++) {
                if (databaseNilai[i].id === id) {
                    dataNilai = databaseNilai[i];
                }
            }

            if (dataNilai !== null) {
                resolve(dataNilai);
            } else {
                reject("Nilai siswa tidak ditemukan");
            }
        }, 2000);
    });
}
async function cekKelulusan(id) {
    try {
        const data = await ambilNilaiSiswa(id);

        if (data.nilai >= 75) {
            console.log("Nilai:", data.nilai);
            console.log("Status: Lulus");
        } else {
            console.log("Nilai:", data.nilai);
            console.log("Status: Tidak Lulus");
        }
    } catch (error) {
        console.log(error);
    }
}
cekKelulusan(3);

