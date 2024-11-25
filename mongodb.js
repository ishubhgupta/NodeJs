const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(){
    await client.connect();
    const db = client.db('E-comm');
    return db.collection('products');
}

module.exports = dbConnect;