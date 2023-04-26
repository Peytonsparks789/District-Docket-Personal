const { connect, disconnect, db } = require('../server/conn');
const { createUser } = require("../server/crudFunctions/userCreate");
const { hashPassword } = require("../server/crudFunctions/hash");


module.exports = {
    conn: {
        connect, disconnect, db
    },
    userCreate: {
        createUser,
    },
    hash: {
        hashPassword
    }
}
