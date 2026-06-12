const lampu = {
    status: "mati",

    nyalakan: function () {
        this.status = "menyala";
        console.log("Lampu dinyalakan.");
    },

    matikan: function () {
        this.status = "mati";
        console.log("Lampu dimatikan.");
    },

    toggle: function () {
        if (this.status === "mati") {
            this.status = "menyala";
            console.log("Toggle: lampu sekarang menyala.");
        } else {
            this.status = "mati";
            console.log("Toggle: lampu sekarang mati.");
        }
    },

    cekStatus: function () {
        console.log("Status lampu: " + this.status);
    }
};

  lampu.cekStatus();
lampu.nyalakan();
lampu.cekStatus();
lampu.toggle();
lampu.cekStatus();
lampu.toggle();
lampu.cekStatus();