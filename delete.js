const dbConnect = require('./mongodb');

const del = async () => {
    const db = await dbConnect();
    let res = await db.collection('products');
    res.deleteOne({name: 'note S'});
}

del();