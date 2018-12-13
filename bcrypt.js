const bcrypt = require("bcryptjs");

const password = "howdydoooo";

const hash = () => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            return hash;
            // hashedPW = hash;
            // console.log(hashedPW);
        });
    });
};

hash().then(hash => console.log(hash));

