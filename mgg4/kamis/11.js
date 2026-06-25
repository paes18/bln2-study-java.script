const databaseLogin = [
    { id: 1, username: "budi", password: "123", nama: "Budi", premium: true },
    { id: 2, username: "ani", password: "456", nama: "Ani", premium: false }
];

function login(username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let user = null;

            for (let i = 0; i < databaseLogin.length; i++) {
                if (
                    databaseLogin[i].username === username &&
                    databaseLogin[i].password === password
                ) {
                    user = databaseLogin[i];
                }
            }

            if (user !== null) {
                resolve(user);
            } else {
                reject("Username atau password salah");
            }
        }, 2000);
    });
}
async function prosesLogin() {
    try {
        const user = await login("budi", "123");
        console.log("Selamat datang, " + user.nama);
    } catch (error) {
        console.log(error);
    }
}

prosesLogin();
