function buatTim(ketua, wakil, ...anggota) {
    if (anggota.length < 3) {
        console.log("anggota minimal harus 3 orang");
        return;
    }
    const tim = {
        ketua: ketua,
        wakil: wakil,
        anggota: [...anggota]
    };
    console.log(tim);
}
buatTim(
    "faiz",
    "rijaldi",
    "yuda",
    "hilmi",
    "alok"
);