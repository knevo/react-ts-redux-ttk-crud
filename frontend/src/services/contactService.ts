import { Contact } from '../types/contact';
import { FilterBy } from '../types/filterBy';
import { httpService } from './httpService';
import { loggerService } from './loggerService';

const ENDPOINT = 'contact'

const query = (filterBy?: FilterBy) => {
  try {
    return httpService.get(ENDPOINT + `?name=${filterBy.name}`)
  } catch (err) {
    loggerService.error('Error while getting contacts', err)
    throw err
  }
}

const save = (contact: Contact) => {
  return contact._id ? _update(contact) : _add(contact)
}

const remove = (contactId: string) => {
  try {
    return httpService.delete(ENDPOINT + `/${contactId}`)
  } catch (err) {
    loggerService.error('Error while adding contact', err)
    throw err
  }
}

export const contactService = {
  query,
  save,
  remove
}

const _add = (contactToAdd: Omit<Contact, 'id'>) => {
  try {
    return httpService.post(ENDPOINT, contactToAdd)
  } catch (err) {
    loggerService.error('Error while adding contact', err)
    throw err
  }
}
const _update = (contact: Contact) => {
  try {
    return httpService.put(ENDPOINT + `/${contact._id}`, contact)
  } catch (err) {
    loggerService.error('Error while updating contact', err)
    throw err
  }
}
