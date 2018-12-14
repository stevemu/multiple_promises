const bcrypt = require("bcryptjs");

const password = "hiMyNameIsNick";

// const hash = (password) => {
//     console.log("original password", password);
//     return new Promise((resolve, reject) => {
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(password, salt, (err, hash) => {
//                 console.log("hash", hash);
//                 resolve(hash);
//             });
//         });
//     })
// };

const hash = async (password) => {
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(password, salt);
  return hash;
}


// const hashAndCheck = async (password) => {
//     let hashedPW = await hash(password);
//     console.log("hashedPW", hashedPW);

//     return new Promise((resolve, reject) => {
//         bcrypt.compare(password, hashedPW).then((res) => {
//             if (res === true) {
//                 resolve(res);
//             } else {
//                 reject("passwords don't match");
//             }
//         });
//     })
// };

const hashAndCheck = async (password) => {
  let hashedPW = await hash(password);
  let res = await bcrypt.compare(password, hashedPW);
  if (res == true) {
    return true;
  } else {
    throw new Error("passwords don't match");
  }
}

hashAndCheck(password)
    .then(res => console.log(res))
    .catch(e => console.log(e));