function buatLogger() {

    let riwayat = [];

    function logging(aktivitas) {
        riwayat.push({
            aktivitas: aktivitas,
            waktu: new Date()
        });
    }
   logging.tampilkanRiwayat = function () {

    for (let i = 0; i < riwayat.length; i++) {

        let waktu = riwayat[i].waktu;

        let tanggal = String(waktu.getDate()).padStart(2, "0");
        let bulan = String(waktu.getMonth() + 1).padStart(2, "0");
        let tahun = waktu.getFullYear();

        let jam = String(waktu.getHours()).padStart(2, "0");
        let menit = String(waktu.getMinutes()).padStart(2, "0");
        let detik = String(waktu.getSeconds()).padStart(2, "0");

        console.log("Aktivitas : " + riwayat[i].aktivitas);
        console.log(
            "Waktu : " + tanggal + "-" + bulan + "-" + tahun + " " + jam + ":" + menit + ":" + detik
        );
        console.log("----------------");
    }

};
    return logging;
}
const logging = buatLogger();

logging("Login");
logging("Checkout");
logging("Logout");

logging.tampilkanRiwayat();