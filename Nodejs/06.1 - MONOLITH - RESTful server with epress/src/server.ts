import { join } from 'path';
import express from 'express';
import { router } from './routes/routes.ts';

//והגדרת הפורט env טעינת הקובץ 
process.loadEnvFile(join(import.meta.dirname, '../', '/.env'));
const PORT = process.env.PORT;

// יצירת אובייקט השרת
const server = express();

// הגדרות נוספות לשרת
server.use(express.json()); // body כלי לקריאת ה 

// routes קישור ל 
server.use('/api', router);

// הפעלת השרת
server.listen(PORT, () => {
    console.log(`[Server] live at http://localhost:${PORT}`);
});

// Model - class with db connection 
// View - the ui
// Controller - the glue (API)