import { ObjectId } from 'mongodb';

export interface Contact {
  _id: ObjectId
  name: string
  address: string
  phone: string
}