const bcrypt = require("bcryptjs");

const hash = (password) => {
    let hashedPW = password;
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            hashedPW = hash;
            console.log("hash", hash);
        });
    });
    return hashedPW;
};

// IGNORE
// const checkHash = () => {
//     bcrypt.compare(password, hashedPW).then((res) => {
//         console.log(res);
//     });
// };

hash("howdy").then(hashedPW => console.log(hashedPW));

// console.log("hashedPW", hash("thisIsMyPassword"));