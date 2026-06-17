const komentar = "Dasar bodoh! Kamu sangat jelek dan malas.";

let hasilSensor = komentar;
hasilSensor = hasilSensor.replace("bodoh", "*****");
hasilSensor = hasilSensor.replace("jelek", "*****");
hasilSensor = hasilSensor.replace("malas", "*****");

console.log("sebelum:", komentar);
console.log("sesudah:", hasilSensor);