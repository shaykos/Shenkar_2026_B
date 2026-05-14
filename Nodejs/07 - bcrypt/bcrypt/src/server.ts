//מייבאים את כל מה שצריך
import { join } from 'path';
import express from 'express';
import router from './router.ts';

//env טוענים את משתני הסביבה הכתובים בקובץ 
process.loadEnvFile(join(process.cwd(), 'config', '.env'));

//נשתמש במשתני הסביבה
const PORT = process.env.PORT || 5500;

//ניצור את השרת
const server = express();
server.use(express.json()); //JSON מאפשר לשרת לקבל ולעבוד עם נתוני 
server.use(express.urlencoded({ extended: true })); //JSON מאפשר לשרת לקבל נתונים בצורה שונה מ 
server.use(express.static('public'));

//CRUD ופעולות URL מגדירים את המסלולים השונים שהשרת תומך בהם - כתובות 
server.use('/api', router);


//להריץ את השרת
server.listen(PORT, () => console.log(`[SERVER] running at http://localhost:${PORT}`));


