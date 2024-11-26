const dbConnect = require('./mongodb');

const read = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

read();