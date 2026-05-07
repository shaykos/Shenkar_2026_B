import { join } from 'path';
import express from 'express';
import type { Express } from 'express';

process.loadEnvFile(join(import.meta.dirname, '../', '/.env'));
const PORT = process.env.PORT;

const server = express();

server.get('/api/users', async (req, res) => {
    res.status(200).send('kuku');
});

server.listen(PORT, () => {
    console.log(`[Server] live at http://localhost:${PORT}`);
});
