import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { buildErrorResponse } from "../utils/response.builder.ts";
import { log } from "console";

export async function isAuth(req: Request, res: Response, next: NextFunction) {
    try {
        log("req", req.headers);
        let token = req.headers["authorization"];
        if (!token)
            return res.status(401).json(buildErrorResponse("No token provided"));

        let user = jwt.verify(token, process.env.JWT_SECRET as string);

        if (!user) {
            return res.status(401).json(buildErrorResponse("Invalid token"));
        }

        next();
    }
    catch (error) {
        return res.status(500).json(buildErrorResponse(error));
    }

}