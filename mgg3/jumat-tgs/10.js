function hitungtotal(...angka) {
    let total = 0; 

    for (let i = 0; i < angka.length; i++) {
        total += angka[i];
    }
    return total;
}
console.log(hitungtotal(10, 20, 30));
console.log(hitungtotal(5, 10, 15, 20, 25));