import { createServer } from "http";
import { join } from "path";
import { handleRoutes } from "./routes.ts";


//המכיל את כל משתני הסביבה שלנו .env טוענים את הקובץ 
process.loadEnvFile(join(import.meta.dirname, '../', '.env'));

const PORT = process.env.PORT || 3000;

const server = createServer(handleRoutes);

server.listen(PORT, () => { console.log(`[Server] live at http://localhost:${PORT}`) });