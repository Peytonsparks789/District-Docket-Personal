const { connect, hashPassword } = require('../index');

data = {
    username: 'John',
    password: 'Frink'
}

async function checkUser(data){
    // Declare db collection
    const db = await connect();
    const collection = db.collection('users');

    const hash = await hashPassword(data.password)

    const query = {
        username: username,
        password: hashedPassword
    };
    const cursor = await collection.findOne(query);
    console.log(cursor);

}

checkUser(data)