import EventEmitter from "events";
import { mkdir, readFile, writeFile, rm } from "fs/promises";
import { existsSync } from 'fs';


export default class LogManager extends EventEmitter {

    constructor() {
        super();
    }

    public async init() {
        try {
            let pathToFolder = `${import.meta.dirname}/logs`;
            if (!existsSync(pathToFolder)) {
                await mkdir(`${import.meta.dirname}/logs`, { recursive: true });
                this.emit('folderCreated', `${import.meta.dirname}/logs`);
            }
            else {
                this.emit('folderReady', pathToFolder);
            }
        } catch (error) {
            this.emit('error', error);
        }
    }

    public async addLog(message: string) {
        let pathToFile = `${import.meta.dirname}/logs/system.json`;
        let logsContent = [];
        try {
            //בודקים אם הקובץ קיים ומעדכנים את התוכן שלו במידה וכן
            if (existsSync(pathToFile)) {
                let data = await readFile(pathToFile, 'utf-8');
                logsContent = JSON.parse(data);
            }

            // מוסיפים את הלוג כפי שהתקבל לפונקציה
            logsContent.push({ message, timestamp: new Date().getTime() });

            //system.json לרשום את הלוג בקובץ 
            await writeFile(pathToFile, JSON.stringify(logsContent));

            //יצירת אירוע כאשר הלוג מתווסף
            this.emit('logAdded', message);
        } catch (error) {
            this.emit('error', error);
        }
    }

    public async deleteLogs() {
        try {
            let pathToFolder = `${import.meta.dirname}/logs`;
            await rm(pathToFolder, { force: true, recursive: true });
            this.emit('logsDeleted');
        } catch (error) {
            this.emit('error', error);
        }
    }
}
