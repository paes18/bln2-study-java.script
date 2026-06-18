const perusahaan = "PT Maju Bersama";

function dataDivisi() {
    let divisi = "IT";

    function dataTim() {
        let tim = "Frontend";

        console.log("perusahaan:", perusahaan);
        console.log("divisi:", divisi);
        console.log("tim:", tim);
    }

    dataTim();

    console.log("dari scope divisi:", divisi);
    // console.log(tim); // error karena tim hanya bisa diakses di dalam dataTim
}

dataDivisi();

console.log("dari perusaan:", perusahaan);
// console.log(divisi); // error karena divisi ada di dalam function