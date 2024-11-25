const dbConnect = require('./mongodb');

const update = async () => {
    const db = await dbConnect();
    let res = await db.collection('products');
    res.updateOne({name: 'nord'}, {$set: {name: 'nord', brand: 'oneplus'}});
}

update();