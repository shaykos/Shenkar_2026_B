import type { Request, Response } from "express";
import { buildErrorResponse, buildSuccessResponse } from "../../utils/response.builder.ts";
import type { User } from "./user.types.ts";
import { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

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
        let hashPass = await hash(data.password, 10);
        data.password = hashPass;
        let newUser = await mdl.registerUser(data);
        return res.status(201).json(buildSuccessResponse(newUser));
    } catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }
}

export async function handleUserLogin(req: Request, res: Response) {
    try {
        let data: User = req.body;

        if (!data.password)
            return res.status(400).json(buildSuccessResponse("the password is empty"));

        let user = await mdl.loginUser(data);

        // מחיקת שדה סיסמה
        let userRes = { ...user };
        delete userRes.password;

        if (!user)
            return res.status(400).json(buildSuccessResponse("invalid credentials"));

        // ליצור טוקן ליוזר
        const token = jwt.sign(userRes, process.env.JWT_SECRET as string, { expiresIn: '30s' });

        return res.status(200).json(buildSuccessResponse({ token }));
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
