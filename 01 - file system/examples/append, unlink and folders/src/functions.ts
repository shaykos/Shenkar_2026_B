import { currentDir } from './settings.ts';
import { readFile, writeFile, appendFile, unlink, mkdir, rm } from 'fs/promises';

export async function readLocalFile(n: number) {
    try {
        let data = await readFile(`${currentDir}/files/file_${n}.txt`, 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

export function getRandomNumber() {
    let max = 10, min = 1;
    return Math.floor(Math.random() * (max - min) + min);
}

export async function writeLocalFile(n: number) {
    let table = '';
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            table += `${r * c}\t`;
        }
        table += "\n";
    }
    try {
        await writeFile(`${currentDir}/files/table_${n}.txt`, table);
        console.log('DONE!');
    } catch (error) {
        console.error(error);
    }
}

export async function appendLocalFile(n: number) {
    try {
        let text = "\n\nkuku kuku kuku\nlulu lulu lulu";
        await appendFile(`${currentDir}/files/file_${n}.txt`, text);
        console.log("DONE updating the file!");
    } catch (error) {
        console.error(error);
    }
}

export async function deleteLocalFile(n: number) {
    try {
        //let data = await readFile(`${currentDir}/files/file_${n}.txt`, 'utf8');
        //await writeFile(`${currentDir}/files/file_${n}.txt.bak`, data);
        await unlink(`${currentDir}/files/file_${n}.txt`); // מחיקת הקובץ פיזית
        console.log('File deleted!');
    } catch (error) {
        console.error(error);
    }
}

export async function createFolder() {
    try {
        await mkdir(`${currentDir}/files/uploads/user2`, { recursive: true });
        console.log("Folder created!");
    } catch (error) {
        console.error(error);
    }
}

export async function deleteFolder() {
    try {
        await rm(`${currentDir}/files/uploads/user2`, { force: true, recursive: true });
        console.log("Folder deleted!");
    } catch (error) {
        console.error(error);
    }
}