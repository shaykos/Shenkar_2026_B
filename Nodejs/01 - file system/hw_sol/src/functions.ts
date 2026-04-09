import { currentDir } from './settings.ts';
import { readFile, writeFile } from 'fs/promises';


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