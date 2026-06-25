const platform = {
    login: function (username, password) {
        return login(username, password);
    },

    ambilProfil: function (user) {
        return ambilProfil(user);
    },

    ambilKursus: function () {
        return ambilKursus();
    },

    ambilNilai: function (id) {
        return ambilNilaiSiswa(id);
    },

    tampilkanDashboard: async function (username, password) {
        try {
            const user = await this.login(username, password);

            const hasil = await Promise.all([
                this.ambilProfil(user),
                this.ambilKursus(),
                this.ambilNilai(user.id)
            ]);

            console.log("=== dashboard code academy ===");
            console.log("Nama:", hasil[0].nama);
            console.log("Premium:", hasil[0].premium);
            console.log("Kursus:", hasil[1]);
            console.log("Nilai:", hasil[2].nilai);
        } catch (error) {
            console.log("Error:", error);
        }
    }
};

platform.tampilkanDashboard("budi", "123");
