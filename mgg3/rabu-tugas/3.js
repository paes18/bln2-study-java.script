const password = "BelajarJS2026";

let hurufBesar = false;
let hurufkecil = false;
let adaAngka = false;

for (let i = 0; i < password.length; i++) {
    let karakter = password[i];

    if (karakter >= "A" && karakter <= "Z") {
        hurufBesar = true;
    } else if (karakter >= "a" && karakter <= "z") {
        hurufkecil = true;
    } else if (karakter >= "0" && karakter <= "9") {
        adaAngka = true;
    }
}

console.log("minimal 8 karakter:", password.length >= 8);
console.log("ada huruf besar:", hurufBesar);
console.log("ada huruf kecil:", hurufkecil);
console.log("ada angka:", adaAngka);
