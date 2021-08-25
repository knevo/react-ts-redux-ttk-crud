import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../../types/contact'
import { addContact, getContacts, removeContact, updateContact } from '../actions/contactAction'

interface ContactState {
  contacts: Contact[]
  isLoading: boolean
  error: string
}

const initialState: ContactState = {
  contacts: null,
  error: null,
  isLoading: false
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: {
    // TODO: Refactor this with matches
    [getContacts.fulfilled.type]: (state, action: PayloadAction<Contact[]>) => {
      state.isLoading = false
      state.contacts = action.payload
    },
    [getContacts.pending.type]: (state) => {
      state.isLoading = true
    },
    [getContacts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [addContact.fulfilled.type]: (state, action: PayloadAction<Contact>) => {
      state.isLoading = false
      state.contacts.push(action.payload)
    },
    [addContact.pending.type]: (state) => {
      state.isLoading = true
    },
    [addContact.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [removeContact.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.contacts = state.contacts.filter(contact => contact._id !== action.payload)
    },
    [removeContact.pending.type]: (state) => {
      state.isLoading = true
    },
    [removeContact.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    [updateContact.fulfilled.type]: (state, action: PayloadAction<Contact>) => {
      state.isLoading = false
      state.contacts = state.contacts.map(contact => contact._id === action.payload._id ? action.payload : contact)
    },
    [updateContact.pending.type]: (state) => {
      state.isLoading = true
    },
    [updateContact.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})


export const contactReducer = contactSlice.reducer