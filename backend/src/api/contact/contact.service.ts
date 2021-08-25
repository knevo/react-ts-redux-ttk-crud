
import { ObjectId } from 'mongodb';
import { logger } from '../../services/logger.service';
import { dbService } from '../../services/db.service';
import { FilterBy } from '../../types/filterBy';
import { Contact } from '../../types/contact';

const COLLECTION_NAME = 'contact'

export const query = async (filterBy: FilterBy = { name: '' }) => {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection(COLLECTION_NAME)
    try {
        const contacts = await collection.find(criteria).toArray();
        contacts.forEach(contact => delete contact.password);
        return contacts
    } catch (err) {
        logger.error(`[ContactService] [query] cannot query contacts`, err)
        throw err;
    }
}

export const getById = async (contactId: string) => {
    const collection = await dbService.getCollection(COLLECTION_NAME)
    try {
        const contact = await collection.findOne({ "_id": new ObjectId(contactId) })
        return contact
    } catch (err) {
        logger.error(`[ContactService] [getById] cannot find contact: ${contactId}`, err)
        throw err;
    }
}

export const remove = async (contactId: string) => {
    const collection = await dbService.getCollection(COLLECTION_NAME)
    try {
        await collection.deleteOne({ "_id": new ObjectId(contactId) })
    } catch (err) {
        logger.error(`[ContactService] cannot remove contact: ${contactId}`, err)
        throw err;
    }
}

export const update = async (contact: Contact) => {
    const collection = await dbService.getCollection(COLLECTION_NAME)
    contact._id = new ObjectId(contact._id);
    try {
        await collection.updateOne({ "_id": contact._id }, { $set: contact })
        return contact
    } catch (err) {
        logger.error(`[ContactService] cannot update contact: ${contact.name}`, err)
        throw err;
    }
}

export const add = async (contactToAdd: Contact) => {
    const collection = await dbService.getCollection(COLLECTION_NAME)
    try {
        const res = await collection.insertOne(contactToAdd);
        const contact = {
            ...contactToAdd,
            _id: res.insertedId
        }
        return contact;
    } catch (err) {
        logger.error('[ContactService] [add]', err)
        throw err;
    }
}

function _buildCriteria(filterBy: FilterBy) {
    const criteria: any = {};
    if (filterBy.name) {
        criteria.name = { $regex: new RegExp(filterBy.name, 'i') }
    }
    return criteria;
}

// Populate DB with test data if no data found
(async () => {
    const contacts = await query()
    if (contacts.length) return
    CONTACTS.forEach((contact: Contact) => {
        add(contact)
    })
})()

const CONTACTS = [
    {
        "name": "Rick",
        "phone": "(238)038-8570",
        "address": "9880 In Rd"
    },
    {
        "name": "Earnell",
        "phone": "(635)104-6986",
        "address": "8015 Sit Ln"
    },
    {
        "name": "Kumkum",
        "phone": "(857)258-5965",
        "address": "729 Sapien St"
    },
    {
        "name": "RoMeka",
        "phone": "(645)348-7382",
        "address": "6519 Tincidunt Dr"
    },
    {
        "name": "Katie",
        "phone": "(685)041-9869",
        "address": "1243 Neque Ave"
    },
    {
        "name": "Amani",
        "phone": "(903)582-7737",
        "address": "5939 Et Ct"
    },
    {
        "name": "Lee",
        "phone": "(492)839-3161",
        "address": "6823 Donec Ave"
    },
    {
        "name": "Andrew",
        "phone": "(835)717-7610",
        "address": "8507 Donec Rd"
    },
    {
        "name": "Drew",
        "phone": "(810)133-0713",
        "address": "6557 Convallis Ct"
    },
    {
        "name": "Yvette",
        "phone": "(576)926-3749",
        "address": "7558 Lectus Ln"
    }
]

