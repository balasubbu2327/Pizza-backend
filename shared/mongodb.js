const { MongoClient } = require('mongodb');

const mongo = {

    db: null,
    students:null,
    products: null,
    users: null,
    orders: null,

    async connect(){
        // get URL
        const client = await new MongoClient(process.env.MONGO_DB_URL);
        await client.connect();
        console.log(`monogodb is connected successfully ${process.env.MONGO_DB_URL}`);

        // get DB Name
        this.db = await client.db(process.env.MONGO_DB_NAME);
        console.log(`db name is ${process.env.MONGO_DB_NAME}`);

        // get DB collection
        this.students = this.db.collection('students');
        this.orders = this.db.collection('orders');
        this.products = this.db.collection('products');
        this.users = this.db.collection('users');
        console.log(`${process.env.MONGO_DB_NAME} collection initillized successfully`);
    }
}

module.exports = mongo;