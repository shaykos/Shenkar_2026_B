import multer, { memoryStorage } from "multer";
import { v2 as cloudinary } from "cloudinary";

// הגדרת הענן
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME as string,
    api_key: process.env.CLOUDINARY_API_KEY as string,
    api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

// יצירת שמירה בשרת עצמו
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // באיזו תיקייה שומרים את הקבצים
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
});

// פונקציה לשמירה בשרת
export const saveToStorage = multer({ storage });

// פונקציה לשמירה בזיכרון 
export const saveToMemory = multer({ storage: multer.memoryStorage() });