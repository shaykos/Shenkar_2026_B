import type { Request, Response } from 'express';
import { buildErrorResponse, buildSuccessResponse } from '../../utils/response.builder.js';
import type { Animal } from './animals.types.ts';
import * as animalModel from './animals.model.js';
import { v2 as cloudinary } from 'cloudinary';

export async function addAnimal(req: Request, res: Response) {
    try {
        if (req.file) {
            let base64Image = Buffer.from(req.file.buffer).toString('base64');
            const dataURI = `data:${req.file.mimetype};base64,${base64Image}`;
            const uploadRes = await cloudinary.uploader.upload(dataURI, {
                resource_type: 'auto',
                folder: 'animals'
            });

            const animalData = req.body as Animal;
            animalData.imageUrl = uploadRes.secure_url;

            if (animalData.name === undefined || animalData.species === undefined ||
                animalData.age === undefined || animalData.habitat === undefined || animalData.imageUrl === undefined) {
                return res.status(400).json(buildErrorResponse("missing required fields: name, species, age, habitat, imageUrl"));
            }

            const result = await animalModel.addAnimalToDB(animalData);
            return res.status(201).json(buildSuccessResponse(result));
        }
        return res.status(400).json(buildErrorResponse("error while uploading the file"));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function listAnimals(req: Request, res: Response) {
    try {
        const result = await animalModel.getAllAnimalsFromDB();
        return res.status(200).json(buildSuccessResponse(result));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function getAnimalById(req: Request, res: Response) {
    try {
        let { id } = req.params;
        const result = await animalModel.getAnimalByIdFromDB(id as string);
        if (result) {
            return res.status(200).json(buildSuccessResponse(result));
        } else {
            return res.status(404).json(buildErrorResponse("animal not found"));
        }
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function updateAnimal(req: Request, res: Response) {
    try {
        let { id } = req.params;
        const animalData = req.body as Animal;
        const result = await animalModel.updateAnimalInDB(id as string, animalData);
        if (result.upsertedCount > 0 || result.modifiedCount > 0) {
            return res.status(200).json(buildSuccessResponse(result));
        } else {
            return res.status(404).json(buildErrorResponse("animal not found"));
        }
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function deleteAnimal(req: Request, res: Response) {
    try {
        let { id } = req.params;
        const result = await animalModel.deleteAnimalFromDB(id as string);
        if (result.deletedCount > 0) {
            return res.status(200).json(buildSuccessResponse(result));
        } else {
            return res.status(404).json(buildErrorResponse("animal not found"));
        }
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}