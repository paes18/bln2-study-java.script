let dataArray = ["Ari", "Bima", "Citra"];
let dataString = "Kerajaan";
let dataObject = {
    nama: "Ari",
    energi: 90
};


console.log("Array:");          // array termasuk iterable 
for (let isi of dataArray) {    // karena bisa di looping pakai for...of
    console.log(isi);
}


console.log("String:");              // string termasuk iterable  
for (let huruf of dataString) {     // karena hurufnya bisa diambil satu per satu
    console.log(huruf);
}


console.log("Object:");// object biasa termasuk non-iterable 
console.log(dataObject);// kaena tidak bisa langsung di loooping pakai for...of
// dataArray -> iterable
// dataString -> iterable
// dataObject -> non-iterable