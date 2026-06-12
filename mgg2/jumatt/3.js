const dataCek = {
    array: ["alpukat", "pisang", "es-cekek"],
    teks: "Faiz", //string
    objectBiasa: {
        nama: "Faiz",
    },

    cekIterable: function (namaData, data) {
        if (data[Symbol.iterator]) {
            console.log(namaData + " sayaa.");//termasuk iterable

            for (let isi of data) {
                console.log(isi);
            }
        } else {
            console.log(namaData + "legends object biasa."); //object biasa ga termasuk iterable
        }

        console.log("----------------"); 
    }
};

dataCek.cekIterable("array | kesukaan ", dataCek.array);
dataCek.cekIterable("string | nama ", dataCek.teks);
dataCek.cekIterable("game mobile ", dataCek.objectBiasa);