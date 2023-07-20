const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);
const dbName = 'wikipedia_lexicon';


module.exports = {
    client,
    dbName
};