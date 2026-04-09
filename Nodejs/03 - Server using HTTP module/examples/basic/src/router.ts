import type { ServerResponse, IncomingMessage } from "node:http";
import { join, extname } from 'path';
import { readFile } from 'fs/promises';

let mimeTypes = {
    '.css': 'text/css',
    '.js': 'application/javascript'
}

export async function handleRoutes(req: IncomingMessage, res: ServerResponse) {
    try {
        let fileExt = req.url ? extname(req.url) : null;

        if (req.url == '/') {
            let page = await readFile(join(import.meta.dirname, '../public', 'index.html'), 'utf-8');
            res.writeHead(200, { "Content-Type": "text/html" });
            return res.end(page);
        }

        if (req.url == '/api/users') {
            let pathToFile = join(import.meta.dirname, '../data', 'users.json');
            let users = await readFile(pathToFile, 'utf-8');
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(users);
        }

        if (fileExt && (fileExt == '.css' || fileExt == '.js')) {
            let page = await readFile(join(import.meta.dirname, `../${req.url}`), 'utf-8');
            res.writeHead(200, { "Content-Type": mimeTypes[fileExt] });
            return res.end(page);
        }
    } catch (error) {
        console.log(error);
    }
}