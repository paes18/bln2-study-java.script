const kalimat = "JavaScript adalah bahasa pemrograman yang sangat menyenangkan";

let kataKalimat = kalimat.split(" ");

console.log("jumlah karakter:", kalimat.length);
console.log("jumlah kata:", kataKalimat.length);
console.log("kata pertama:", kataKalimat[0]);
console.log("kata terakhir:", kataKalimat[kataKalimat.length - 1]);
console.log("mengandung kata pemrograman:", kalimat.includes("pemrograman"));