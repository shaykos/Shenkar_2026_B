import { createServer } from "http";
import { join } from "path";
import type { IncomingMessage, ServerResponse } from "http";

//המכיל את כל משתני הסביבה שלנו .env טוענים את הקובץ 
process.loadEnvFile(join(import.meta.dirname, '../', '.env'));

const PORT = process.env.PORT || 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if(req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
    }
});

server.listen(PORT, () => { console.log(`[Server] live at http://localhost:${PORT}`) });