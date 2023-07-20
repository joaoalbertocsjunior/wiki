'use strict';

const { client, dbName } = require('../imports.js');

const insertOrUpdateDocument = async (data, collectionName) => {
    try {
        // Connect to MongoDB
        await client.connect();
        //console.log('Connected to MongoDB');

        // Access the database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Check if a document exists in the collection
        const document = await collection.findOne();
        if (document) {
            // Document exists, update the existing document
            const result = await collection.updateOne({}, { $set: data });
            //console.log('Document updated:', result.modifiedCount);
        } else {
            // No document exists, insert a new document
            const result = await collection.insertOne(data);
            //console.log('Document inserted:', result.insertedId);
        }
    } catch (error) {
        console.error('Error inserting/updating document:', error);
    } finally {
        // Close the MongoDB connection
        await client.close();
        //console.log('Connection closed');
    }
};

module.exports = insertOrUpdateDocument;