const bcrypt = require("bcryptjs");

const password = "hiMyNameIsNick";

const hash = (password) => {
    console.log("original password", password);
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                console.log("hash", hash);
                resolve(hash);
            });
        });
    })
};

const hashAndCheck = async (password) => {
    let hashedPW = await hash(password);
    console.log("hashedPW", hashedPW);

    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hashedPW).then((res) => {
            if (res === true) {
                resolve(res);
            } else {
                reject("passwords don't match");
            }
        });
    })
};

hashAndCheck(password)
    .then(res => console.log(res))
    .catch(e => console.log(e));