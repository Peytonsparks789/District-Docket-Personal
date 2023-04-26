const { connect, disconnect, hashPassword } = require('../index');
const {ObjectId} = require("mongodb");

async function createUser(username, password, data) {
    const db = await connect();

    // Declare db collection
    const collection = db.collection('users');
    const document = {
        username: username,
        password: password };

    // Hash the user's password
    document.password = await hashPassword(document.password);

    // Insert user login info into db
    await collection.insertOne(document);
    console.log('User Successfully Inserted')

    // Grab user to read userId
    const query = {
        username: username
    };
    const user = await collection.findOne(query);
    console.log(user);

    const userId = user._id.toString();

    await createContact(db, userId, data);
}

async function createContact(db, userId, data) {
    // Declare db collection
    const collection = db.collection('contacts');
    const document = {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        phone: data.phone,
        userId: new ObjectId(userId) };

    // Insert contact into db
    await collection.insertOne(document);
    console.log('User Contact Successfully Inserted')

    // Query contact for debugging
    const query = {
        firstName: 'John'
    };
    const cursor = await collection.findOne(query);
    console.log(cursor);

    // Disconnect from db
    await disconnect();
}

let data = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'johnd@gmail.com',
    phone: '1234567890'
}
createUser("johnd@gmail.com", "Doe", data)


/*
async function clearData() {

    const db = await connect();

    // Clear users collection
    const usersCollection = db.collection('users');
    await usersCollection.deleteMany({});

    // Clear contacts collection
    const contactsCollection = db.collection('contacts');
    await contactsCollection.deleteMany({});

    // Disconnect from db
    await disconnect();
}

clearData();
*/

module.exports = {
    createUser,
    hashPassword
}