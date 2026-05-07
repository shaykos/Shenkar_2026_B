import type { Request, Response } from "express";
import { buildErrorResponse, buildSuccessResponse } from '../utils/response.builder.ts'
import { v2 as cloudinary } from 'cloudinary';

export async function saveFileLocally(req: Request, res: Response) {
    try {
        return res.status(201).json(buildSuccessResponse('file uploaded'));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function uploadToCloudinary(req: Request, res: Response) {
    try {
        if (req.file) {
            let base64Image = Buffer.from(req.file.buffer).toString('base64');
            const dataURI = `data:${req.file.mimetype};base64,${base64Image}`;
            const result = await cloudinary.uploader.upload(dataURI, {
                resource_type: 'auto'
            });
            return res.status(201).json(buildSuccessResponse(result));
        }
        return res.status(400).json(buildErrorResponse("error while uploading the file"));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}



