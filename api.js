const express = require('express');
const dbConnect = require('./mongodb');

const app = express();

app.get('/',async (req, res)=>{
    let db = await dbConnect();
    let data = db.collection('products');
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
}).listen(4500);