let globaldata = "data global";

function levelsatu() {
    let datasatu = "data no. satu";

    function leveldua() {
        let datadua = "data no. dua";

        function leveltiga() {
            let datatiga = "data no. tiga";

            console.log(globaldata);
            console.log(datasatu);
            console.log(datadua);
            console.log(datatiga);
        }

        leveltiga();
        console.log(datadua);
        // console.log(datatiga); // error
    }

    leveldua();
    console.log(datasatu);
    // console.log(datadua); // error
}

levelsatu();
console.log(globaldata)
// console.log(datasatu); // error