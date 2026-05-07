import { join } from 'path';
import express from 'express';
import router from './router.ts';
import { logger } from './middlewares/logger.ts';
import { errorHandler } from './middlewares/errorHandler.ts';

//והגדרת הפורט env טעינת הקובץ 
process.loadEnvFile(join(import.meta.dirname, '../', '/.env'));
const PORT = process.env.PORT;

// יצירת אובייקט השרת
const server = express();

// הגדרות נוספות לשרת
server.use(express.json()); // body כלי לקריאת ה 
server.use(express.urlencoded({ extended: true })); //JSON מאפשר לשרת לקבל נתונים בצורה שונה מ 
server.use(express.static('public'));

//routes קישור ל 
server.use('/api', logger, router); // url -> /api

//טיפול בשגיאות
server.use(errorHandler);


// הפעלת השרת
server.listen(PORT, () => {
    console.log(`[Server] live at http://localhost:${PORT}`);
});