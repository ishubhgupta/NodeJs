const express = require('express');
const dbConnect = require('./mongodb');

const app = express();
app.use(express.json());

app.get('/',async (req, res)=>{
    let db = await dbConnect();
    let data = db.collection('products');
    data = await data.find().toArray();
    console.log(data);
    res.send(data);
})

app.post('/', async (req, res)=>{
    let db = await dbConnect();
    let data = db.collection('products');
    // data = await data.find().toArray();
    let result  = data.insertOne(req.body);
    console.log(req.body)
    res.send(req.body);
})
app.listen(4500);