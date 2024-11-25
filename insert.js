const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.collection('products').insertOne(
        {name: 'note S', brand: 'vivo', price: 320, category: 'mobile'}
    );
    console.log(result);
}

insert();