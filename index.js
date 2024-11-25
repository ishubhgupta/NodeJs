const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function getData(){
    await client.connect();
    const db = client.db('E-comm');
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();