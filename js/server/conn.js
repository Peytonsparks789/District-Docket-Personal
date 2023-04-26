const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "District-Docket";

let client;
let db;

async function connect() {
    client = await MongoClient.connect(url, {useNewUrlParser: true});
    db = client.db(dbName);
    console.log(`Connected MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);

    return db;
}

async function disconnect() {
    await client.close();
    console.log('MongoDB Connection Closed');
}

module.exports = {
    connect,
    disconnect,
    db
}