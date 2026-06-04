import express from 'express';
import router from './router.js';
import dbServices, { gracefulShutdown } from './utils/db.services.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8888;

const app = express();

app.use(cors({
    origin: ['https://our-zoo-app.onrender.com'], // אפשר לכל המקורות לגשת ל-API
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // אפשר את כל שיטות ה-HTTP הנפוצות
    //allowedHeaders: ['Content-Type', 'Authorization'] // אפשר כותרות אלו בבקשות
}));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));

app.use('/api', router);

// התחלת השרת וחיבור ל-DB
app.listen(PORT, async () => {
    try {
        await dbServices.connect();
        console.log(`Server is running on port ${PORT}`);
        console.log(`[Server] running at http://localhost:${PORT}`);
    } catch (error) {
        console.error('Failed to start server due to DB connection error:', error);
        process.exit(1);
    }
});

// האזנה לאותות סיום של התהליך (Process Signals)
process.on('SIGINT', () => gracefulShutdown('SIGINT'));   // מופעל בלחיצה על Ctrl+C
process.on('SIGTERM', () => gracefulShutdown('SIGTERM')); // מופעל כשהשרת מקבל פקודת סגירה (למשל ב-Heroku/Docker)