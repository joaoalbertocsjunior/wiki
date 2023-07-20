'use strict';

const { client, dbName } = require('../imports.js');

const getCollection = async (collectionName) => {
    try {
        // Connect to MongoDB
        await client.connect();
        //console.log('Connected to MongoDB');

        // Access the database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Retrieve the collection data
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error('Error retrieving collection:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
        //console.log('Connection closed');
    }
};

module.exports = getCollection;