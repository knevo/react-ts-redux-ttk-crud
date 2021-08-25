import { createAsyncThunk } from '@reduxjs/toolkit'
import { contactService } from '../../services/contactService';
import { FilterBy } from '../../types/filterBy';
import { Contact } from '../../types/contact';

export const getContacts = createAsyncThunk<Contact[], FilterBy | object>(
  'contact/getContacts',
  filterBy => {
    return contactService.query(filterBy as FilterBy)
  }
)

export const addContact = createAsyncThunk<Contact, Contact>(
  'contact/addContact',
  contact => {
    return contactService.save(contact)
  }
)

export const updateContact = createAsyncThunk<Contact, Contact>(
  'contact/updateContact',
  contact => {
    return contactService.save(contact)
  }
)

export const removeContact = createAsyncThunk<Contact, string>(
  'contact/removeContact',
  contactId => {
    return contactService.remove(contactId)
  }
)
