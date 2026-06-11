function sensorkata(){
    let kata = ["bodoh", "rajin", "malas", "hebat", "jelek"];
    console.log("sebelum diproses:", kata);
    let hasil = kata.filter(function(item){
        return item !== "bodoh" && item !== "jelek";
    });
    console.log("sesudah diproses:", hasil);
}
sensorkata();

