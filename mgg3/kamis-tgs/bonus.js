function buatReward() {

    let tanggalClaimTerakhir = null;
    let totalClaim = 0;
    let streak = 0;

    return {

        claimReward: function () {

            let sekarang = new Date();

            let tanggalHariIni =
                sekarang.getFullYear() + "-" +
                (sekarang.getMonth() + 1) + "-" +
                sekarang.getDate();

            if (tanggalClaimTerakhir === tanggalHariIni) {

                console.log("reward ditolak, kamu sudah claim hari ini");

            } else {

                tanggalClaimTerakhir = tanggalHariIni;

                totalClaim++;
                streak++;

                let hadiah = streak * 100;

                console.log("reward berhasil diambil");
                console.log("hadiah hari ini:", hadiah, "koin");
                console.log("streak:", streak, "hari");
            }
        },

        cekStatus: function () {

            console.log("total claim :", totalClaim);
            console.log("streak      :", streak);
            console.log("claim terakhir :", tanggalClaimTerakhir);

        }

    };
}

const reward = buatReward();

reward.claimReward();
reward.claimReward();
reward.cekStatus();
