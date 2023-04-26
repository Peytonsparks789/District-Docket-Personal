const { connect, disconnect, db } = require('./conn');
const { createUser } = require("./crudFunctions/userCreate");
const { hashPassword } = require("./crudFunctions/hash");


module.exports = {
    connect, disconnect, db,
    createUser, hashPassword
}

