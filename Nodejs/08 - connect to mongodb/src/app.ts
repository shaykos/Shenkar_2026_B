import { join } from 'path';
import express from 'express';
import router from './router.ts';

process.loadEnvFile(join(process.cwd(), '.env'));
//console.log('Environment variables loaded successfully.', join(process.cwd(), '.env'));

const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`[Server] running http://localhost:${PORT}`);
});