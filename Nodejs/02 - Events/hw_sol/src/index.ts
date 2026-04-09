import LogManager from "./LogManager.ts";

const myLogManager = new LogManager();

myLogManager.on('folderCreated', (path) => console.log(`[Event] Folder created at: ${path}`));
myLogManager.on('folderReady', (path) => console.log(`[Event] Folder ready at: ${path}`));
myLogManager.on('logAdded', (log) => console.log(`[Event] New log added:`, log));
myLogManager.on('logsDeleted', () => console.log(`[Event] Logs and folder were successfully deleted`));
myLogManager.on('error', (err) => console.error(`[Error] System encountered an error:`, err.message));

async function run() {
    await myLogManager.init();
    await myLogManager.addLog('Server started successfully.');
    await myLogManager.addLog('User connected to the database.');

    setTimeout(async () => {
        await myLogManager.deleteLogs();
    }, 5000);
}

run(); 