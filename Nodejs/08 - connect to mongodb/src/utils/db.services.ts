import { MongoClient, type Filter } from 'mongodb';

class DBServices {
    private client: MongoClient;
    private dbName: string;
    private static instance: DBServices | null = null;

    constructor() {
        this.client = new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017');
        this.dbName = process.env.MONGODB_DB_NAME || 'mydatabase';
    }

    async connect() {
        try {
            if(DBServices.instance == null) {
                await this.client.connect();
                console.log('Connected to MongoDB');
                DBServices.instance = this;
            }
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    async disconnect() {
        try {
            await this.client.close();
            DBServices.instance = null;
            console.log('Disconnected from MongoDB');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
            throw error;
        }
    }

    getDocuments(collectionName: string, filter: Filter<any> = {}, projection: object = {}) {
        return this.client.db(this.dbName).collection(collectionName).find(filter, { projection }).toArray();
    }

    insertDocument(collectionName: string, document: Record<string, any>) {
        return this.client.db(this.dbName).collection(collectionName).insertOne(document);
    }

    updateDocument(collectionName: string, filter: Filter<any>, update: Record<string, any>) {
        return this.client.db(this.dbName).collection(collectionName).updateOne(filter, update);
    }

    deleteDocument(collectionName: string, filter: Filter<any>) {
        return this.client.db(this.dbName).collection(collectionName).deleteOne(filter);
    }
}

export async function gracefulShutdown(signal: string) {
    console.log(`\nReceived ${signal}. Starting graceful shutdown...`);
    
    try {
        // סגירת החיבור ל-MongoDB
        await dbServices.disconnect();
        console.log('Database connection closed successfully.');
        
        // יציאה נקייה מהתהליך
        process.exit(0);
    } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
    }
}

const dbServices = new DBServices();

export default dbServices;

