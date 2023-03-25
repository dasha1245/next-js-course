import {MongoClient} from "mongodb";

export async function connectingDb() {
    const client = await MongoClient.connect('mongodb+srv://admin:l7w7foHhlFgG2lQS@cluster0.qbdsrbo.mongodb.net/events?retryWrites=true&w=majority')
    return client
}

export async function insertData(client, collection, document) {
    const db = client.db();
    await db.collection(collection).insertOne(document)
}

export async function getAllData(client, collection, sort) {
    const db = client.db()
    const allComments = await db
        .collection(collection)
        .find()
        .sort(sort)
        .toArray()
    return allComments
}
