// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    const { MongoClient } = require('mongodb');
const url = 'your_mongodb_url_here'; // Replace with your MongoDB URL
const dbName = 'giftDB';
let dbInstance = null;

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    // Task 2: Connect to database giftDB and store in variable dbInstance
    const client = new MongoClient(url);

    // Task 3: Return database instance
    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}
}

module.exports = connectToDatabase;
