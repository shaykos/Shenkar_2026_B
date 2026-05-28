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

export async function getAllAnimalsFromDB() {
    const dbService = new DBService();
    await dbService.connect();
    const result = await dbService.getDocuments('animals');
    await dbService.disconnect();
    return result;
}

export async function getAnimalByIdFromDB(id: string) {
    let filter = { _id: new ObjectId(id) };

    const dbService = new DBService();
    await dbService.connect();
    const result = await dbService.getDocuments('animals', filter);
    await dbService.disconnect();
    return result[0];
}

export async function updateAnimalInDB(id: string, animalData: Partial<Animal>) {
    let filter = { _id: new ObjectId(id) };
    let update = { $set: animalData };

    const dbService = new DBService();
    await dbService.connect();
    const result = await dbService.updateDocument('animals', filter, update);
    await dbService.disconnect();
    return result;
}

export async function deleteAnimalFromDB(id: string) {
    let filter = { _id: new ObjectId(id) };
    const dbService = new DBService();
    await dbService.connect();
    const result = await dbService.deleteDocument('animals', filter);
    await dbService.disconnect();
    return result;
}
