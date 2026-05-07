
import type { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { buildErrorResponse } from "../utils/response.builder.ts";

export function errorHandler(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    res.status(500).json(buildErrorResponse(err));
}