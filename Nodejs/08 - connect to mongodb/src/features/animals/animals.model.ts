import { ObjectId } from 'mongodb';
import dbServices from '../../utils/db.services.ts';
import type { Animal } from './animals.types.ts';

export async function addAnimalToDB(animal: Animal) {
    const result = await dbServices.insertDocument('animals', animal);
    return result;
}

export async function getAllAnimalsFromDB() {
    const result = await dbServices.getDocuments('animals');
    return result;
}

export async function getAnimalByIdFromDB(id: string) {
    let filter = { _id: new ObjectId(id) };

    const result = await dbServices.getDocuments('animals', filter);
    return result[0];
}

export async function updateAnimalInDB(id: string, animalData: Partial<Animal>) {
    let filter = { _id: new ObjectId(id) };
    let update = { $set: animalData };

    const result = await dbServices.updateDocument('animals', filter, update);
    return result;
}

export async function deleteAnimalFromDB(id: string) {
    let filter = { _id: new ObjectId(id) };
    const result = await dbServices.deleteDocument('animals', filter);
    return result;
}
