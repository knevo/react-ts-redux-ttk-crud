import { Request, Response, NextFunction } from 'express'
import * as contactService from './contact.service';

export const getContacts = async (req: Request, res: Response, next: NextFunction) => {
  const filterBy = req.query;
  try {
    // @ts-ignore
    const contacts = await contactService.query(filterBy);
    res.json(contacts);
  } catch (err) {
    next({ msg: 'Cannot get contacts ', err });
  }
}
export const getContactById = async (req: Request, res: Response, next: NextFunction) => {
  const contactId = req.params.id;
  try {
    const contact = await contactService.getById(contactId);
    res.json(contact);
  } catch (err) {
    next({ msg: 'Cannot get contact by id:' + contactId, err });
  }
}

export const deleteContact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await contactService.remove(req.params.id);
    res.end();
  } catch (err) {
    next({ msg: 'Cannot delete contact', err });
  }
}
export const addContact = async (req: Request, res: Response, next: NextFunction) => {
  const contact = req.body;
  try {
    var addedContact = await contactService.add(contact);
    res.json(addedContact);
  } catch (err) {
    next({ msg: 'Cannot add contact', err });
  }
}

export const updateContact = async (req: Request, res: Response, next: NextFunction) => {
  const contact = req.body;
  try {
    var upadtedContact = await contactService.update(contact);
    res.json(upadtedContact);
  } catch (err) {
    next({ msg: 'Cannot update contact', err });
  }
}
