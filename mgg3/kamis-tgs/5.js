// function declaration bisa dipanggil sebelum dibuat
sapa();

function sapa() {
    console.log("hellooo = function declaration");
}

// function expression tidak bisa dipanggil sebelum dibuat
// salam(); // error

const salam = function () {
    console.log("holaaa = function expression");
};

salam();

// kesimpulan:
// function declaration terkena hoisting
// function expression yang disimpan di const tidak bisa dipanggil sebelum deklarasi 