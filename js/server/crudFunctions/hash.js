const bcrypt = require("bcrypt");

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

async function compareHash(password, hash) {
    return await bcrypt.compare(password, hash);
}


module.exports = { hashPassword, compareHash }
