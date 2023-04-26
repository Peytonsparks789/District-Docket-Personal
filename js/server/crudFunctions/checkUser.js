const { connect, hashPassword } = require('../index');

data = {
    username: 'John',
    password: 'Doe'
}

async function checkUser(data){
    // Declare db collection
    const db = await connect();
    const collection = db.collection('users');

    const hash = await hashPassword(data.password)

    try {
        const query = {
            username: data.username,
            password: hash
        };
        const cursor = await collection.findOne(query);
        console.log(cursor);
    }
    catch (e){
        console.log("Could Not Find User", e);
    }

}

checkUser(data)