import { MongoClient } from 'mongodb';

export default class DBService {
    private client: MongoClient;
    private dbName: string;

    constructor() {
        this.client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017');
        this.dbName = process.env.MONGODB_DB_NAME || 'mydatabase';
    }

    async connect() {
        try {
            await this.client.connect();
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    async disconnect() {
        try {
            await this.client.close();
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
            throw error;
        }
    }

    getDocuments(collectionName: string, filter: object = {}, projection: object = {}) {
        return this.client.db(this.dbName).collection(collectionName).find(filter, { projection }).toArray();
    }

    insertDocument(collectionName: string, document: object) {
        return this.client.db(this.dbName).collection(collectionName).insertOne(document);
    }

    updateDocument(collectionName: string, filter: object, update: object) {
        return this.client.db(this.dbName).collection(collectionName).updateOne(filter, update);
    }

    deleteDocument(collectionName: string, filter: object) {
        return this.client.db(this.dbName).collection(collectionName).deleteOne(filter);
    }
}