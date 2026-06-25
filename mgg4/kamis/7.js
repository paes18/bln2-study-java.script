function ambilKursus() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve([
                "JavaScript Dasar",
                "React",
                "Node.js"
            ]);
        }, 3000);
    });
}
async function tampilkanKursus() {
    const kursus = await ambilKursus();
    console.log("Daftar kursus:");
    for (let i = 0; i < kursus.length; i++) {
        console.log("- " + kursus[i]);
    }
}
tampilkanKursus();