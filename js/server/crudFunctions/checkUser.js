const { connect, disconnect} = require('../conn');
const { compareHash } = require('./hash');

data = {
    username: 'johnd@gmail.com',
    password: 'Doe'
}

async function checkUser(data){
    // Connect to db and declare db collection
    const db = await connect();
    const collection = db.collection('users');

    try {
        const query = {
            username: data.username,
        };
        const user = await collection.findOne(query);

        if (!user) {
            console.log('User not found');
            return false;
        }

        const isPasswordMatch = await compareHash(data.password, user.password);

        if (!isPasswordMatch) {
            console.log('User not found');
            return false;
        }

        console.log('User found:', user);
        return true;
    } catch (e) {
        console.log('Could not check user', e);
        return false;
    } finally {
        await disconnect();
    }

}

checkUser(data)