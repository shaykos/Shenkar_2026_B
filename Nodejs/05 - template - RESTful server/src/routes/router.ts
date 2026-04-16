import type { IncomingMessage, ServerResponse } from "http";
import { handleUserRoutes } from "./user.routes.ts";

export async function handleRoutes(req: IncomingMessage, res: ServerResponse) { 

    if(req.url?.includes('/api/users')) return handleUserRoutes(req, res);

}