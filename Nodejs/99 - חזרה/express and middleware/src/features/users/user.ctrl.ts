import type { Request, Response } from "express";
import { buildErrorResponse, buildSuccessResponse } from "../../utils/response.builder.ts";
import type { User } from "./user.types.ts";

import * as mdl from './user.model.ts'

export async function handleGetAllUsers(req: Request, res: Response) {
    try {
        let users = await mdl.getAllusers();
        return res.status(200).json(buildSuccessResponse(users));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function handleGetSpecificUser(req: Request, res: Response) {
    try {

    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function handleCreateUser(req: Request, res: Response) {
    try {
        let data: User = req.body;
        let newUser = await mdl.registerUser(data);
        return res.status(201).json(buildSuccessResponse(newUser));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function handleUpdateUser(req: Request, res: Response) {
    try {

    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function handleDeleteUser(req: Request, res: Response) {
    try {

    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}
