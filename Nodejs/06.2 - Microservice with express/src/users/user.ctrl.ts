import type { Request, Response } from "express";
import { createUser, getUser, getUsers } from "./user.model.ts";
import { buildErrorResponse, buildSuccessResponse } from '../utils/response.builder.ts'

export async function registerUser(req: Request, res: Response) {
    try {
        console.log('body --> ', req.body);
        let info = req.body;
        let newUser = await createUser(info);

        return res.status(201).json(buildSuccessResponse(newUser));

    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function allUsers(req: Request, res: Response) {
    try {
        let allUsers = await getUsers();
        return res.status(200).json(buildSuccessResponse(allUsers));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function findUser(req: Request, res: Response) {
    try {
        let { id } = req.params;
        let user = await getUser(id as string);

        if (user)
            return res.status(200).json(buildSuccessResponse(user));

        return res.status(404).json(buildErrorResponse("User not found"));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

