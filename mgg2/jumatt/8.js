const karakter = {
    nama: "lancelot",
    hp: 800,
    attack: 2600,

    serang: function () {
        console.log(this.nama + " menyerang musuh dengan damage " + this.attack);
    },

    kenaDamage: function (jumlah) {
        this.hp = this.hp - jumlah;

        if (this.hp < 0) {
            this.hp = 0;
        }

        console.log(this.nama + " terkena damage " + jumlah);
    },

    heal: function (jumlah) {
        this.hp = this.hp + jumlah;
        console.log(this.nama + " melakukan heal sebesar " + jumlah);
    },

    status: function () {
        console.log("Nama karakter: " + this.nama);
        console.log("HP: " + this.hp);
        console.log("Attack: " + this.attack);
    }
};

karakter.serang();
karakter.kenaDamage(340);
karakter.heal(300);
karakter.status();