import { ObjectId } from 'mongodb';

export interface Animal {
  _id?: string | ObjectId;
  name: string;
  species: string;
  age: number;
  habitat: string;
  description?: string;
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
