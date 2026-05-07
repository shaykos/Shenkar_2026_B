import type { Request, Response } from "express";

export function getAllUsers(req: Request, res: Response) {
    res.status(200).send('kuku');
}