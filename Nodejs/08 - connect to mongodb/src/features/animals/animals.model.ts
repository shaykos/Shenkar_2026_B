import { ObjectId } from 'mongodb';
import DBService from '../../utils/db.services.ts';
import type { Animal } from './animals.types.ts';

export async function addAnimalToDB(animal: Animal) {
    const dbService = new DBService();
    await dbService.connect();
    const result = await dbService.insertDocument('animals', animal);
    await dbService.disconnect();
    return result;
} 
