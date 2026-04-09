import { readLocalFile, getRandomNumber, writeLocalFile } from "./functions.ts";

//await readLocalFile(1);

let n = getRandomNumber();
await writeLocalFile(n);
