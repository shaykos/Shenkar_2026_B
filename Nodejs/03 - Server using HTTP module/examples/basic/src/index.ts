import { join } from 'path';
import { createServer } from 'http';
import { handleRoutes } from './router.ts';

//המכיל את כל משתני הסביבה שלנו .env טוענים את הקובץ 
process.loadEnvFile(join(import.meta.dirname, '../', '.env'));

//ניגשים למשתנה הסביבה
const PORT = process.env.PORT;

//server יצירת אובייקט של 
const server = createServer(handleRoutes);

//מבקש להאזין לפורט מסוים
server.listen(PORT, () => {
    console.log(`[server] http://localhost:${PORT}`);
});