function buatCounter() {
    let jumlah = 0;

    return function () {
        jumlah++;
        console.log("pengunjung ke-" + jumlah);
    };
}

const counter = buatCounter();

counter();
counter();
counter();