import express from 'express'
import { addContact, getContacts, getContactById, updateContact, deleteContact } from './contact.controller'

const router = express.Router();

router.get('/:id', getContactById);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);
router.get('/', getContacts);
router.post('/', addContact);

export const contactRoutes = router