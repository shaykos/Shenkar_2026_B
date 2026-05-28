import type { Request, Response } from 'express';
import { buildErrorResponse, buildSuccessResponse } from '../../utils/response.builder.ts';
import type { Animal } from './animals.types.ts';
import * as animalModel from './animals.model.ts';

export async function addAnimal(req: Request, res: Response) {
    try {
        const animalData = req.body as Animal;
        if(animalData.name === undefined || animalData.species === undefined || animalData.age === undefined || animalData.habitat === undefined) {
            return res.status(400).json(buildErrorResponse("missing required fields: name, species, age"));
        }
        const result = await animalModel.addAnimalToDB(animalData);
        return res.status(201).json(buildSuccessResponse(result));
    } 
    catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}