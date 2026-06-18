function buatLoginSystem() {
    let berhasil = 0;
    let gagal = 0;

    return {
        loginBerhasil: function () {
            berhasil++;
        },

        loginGagal: function () {
            gagal++;
        },

        statistik: function () {
            console.log("login berhasil:", berhasil);
            console.log("login gagal:", gagal);
        }
    };
}

const login = buatLoginSystem();

login.loginBerhasil();
login.loginBerhasil();
login.loginGagal();

login.statistik();