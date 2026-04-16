import type { IncomingMessage, ServerResponse } from "http";
import type { User } from "../types/types.ts";
import { sendResponse } from "../utils/responseHandler.ts";
import { parseRequestBody } from "../utils/bodyParser.ts";

let users = new Array<User>();

export async function getUsers(req: IncomingMessage, res: ServerResponse) {
    try {
        return sendResponse(res, 200, { success: true, data: users });
    } catch (error) {
        return sendResponse(res, 500, { success: false, error: "Failed to retrieve users" });
    }
}

export async function createUser(req: IncomingMessage, res: ServerResponse) {
    try {
        let body = await parseRequestBody(req);
        const newUser = body as User;
        users.push(newUser);
        return sendResponse(res, 201, { success: true, data: newUser });
    } catch (error) {
        return sendResponse(res, 500, { success: false, error: "Failed to create user" });
    }
}

export async function updateUser(req: IncomingMessage, res: ServerResponse) {
    try {
        let id = Number(req.url?.split('/').pop());
        let body = await parseRequestBody(req);
        const updatedUser = body as User;
        users = users.map(user => user.id === id ? updatedUser : user);
        return sendResponse(res, 200, { success: true, data: updatedUser });
    } catch (error) {
        return sendResponse(res, 500, { success: false, error: "Failed to update user" });
    }
}

export async function deleteUser(req: IncomingMessage, res: ServerResponse) {
    try {
        let id = Number(req.url?.split('/').pop());
        users = users.filter(user => user.id !== id);
        return sendResponse(res, 200, { success: true, data: "User deleted successfully" });
    } catch (error) {
        return sendResponse(res, 500, { success: false, error: "Failed to delete user" });
    }
}