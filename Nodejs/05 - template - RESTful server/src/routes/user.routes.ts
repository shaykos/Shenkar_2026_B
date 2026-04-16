import type { IncomingMessage, ServerResponse } from "http";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/users.ctrl.ts";
import { sendResponse } from "../utils/responseHandler.ts";

export async function handleUserRoutes(req: IncomingMessage, res: ServerResponse) {

    switch (req.method) {
        case 'GET':
            return getUsers(req, res);
        case 'POST':
            return createUser(req, res);
        case 'PUT':
            return updateUser(req, res);
        case 'DELETE':
            return deleteUser(req, res);
        default:
            return sendResponse(res, 405, { success: false, error: "Method Not Allowed" });
    }

}