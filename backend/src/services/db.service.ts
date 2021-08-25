import { Db, MongoClient } from 'mongodb'
import { config } from '../config'
import { logger } from './logger.service';


var dbConn: Db = null;

async function getCollection(collectionName: string) {
    const db = await connect();
    return db.collection(collectionName);
}
async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(config.dbURL);
        const db = client.db(config.dbName);
        dbConn = db;
        return db;
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        throw err;
    }
}

export const dbService = {
    getCollection
}