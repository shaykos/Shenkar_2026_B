//path טוענים את הפונקציה מתוך ה 
import { join } from 'path';
import { createServer } from 'http2';

//המכיל את כל משתני הסביבה שלנו .env טוענים את הקובץ 
process.loadEnvFile(join(import.meta.dirname, '../', '.env'));

//ניגשים למשתנים השונים
console.log(process.env.KUKU);
console.log(process.env.PORT);

const server = createServer((req, res) => {
    console.log(req.url);
    res.end('text');
});

server.listen(process.env.PORT, () => {
    console.log(`[server] http://localhost:${process.env.PORT}`);
});