
function analisisArray(data) {
    let total = data.reduce(function(jumlah, item) {
        return jumlah + item;
    }, 0);

    let genap = data.filter(function(item) {
        return item % 2 === 0;
    });

    let ganjil = data.filter(function(item) {
        return item % 2 !== 0;
    });

    return {
        jumlahData: data.length,
        totalData: total,
        rataRata: total / data.length,
        nilaiTertinggi: Math.max(...data),
        nilaiTerendah: Math.min(...data),
        jumlahGenap: genap.length,
        jumlahGanjil: ganjil.length
    };
}

console.log(analisisArray([10, 20, 30, 40, 50]));
console.log(analisisArray([3, 7, 12, 18, 21, 25]));