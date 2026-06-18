function buatVoting() {
    let suara = 0;

    return {
        vote: function () {
            suara++;
        },

        hasil: function () {
            console.log("jumlah suara:", suara);
        }
    };
}

const kandidatA = buatVoting();

kandidatA.vote();
kandidatA.vote();
kandidatA.vote();

kandidatA.hasil();