import { currentDir } from './settings.ts';
import { readFile, appendFile } from 'fs/promises';


// Method 1
console.log('start');

readFile(`${currentDir}/files/f.txt`, 'utf8')
    .then((data) => {
        console.log(data);
        let txt = `\n${data}\nline 4`;
        return appendFile(`${currentDir}/files/output.txt`, txt);
    })
    .then(() => console.log("file updated successfully!"))
    .catch((error) => console.error(error))

console.log('end');


// Method 2 -- OUR DEFAULT METHOD!! 
try {
    console.log('start');

    let data = await readFile(`${currentDir}/files/f.txt`, 'utf8');
    console.log(data);
    let txt = `\n${data}\nline 4`;
    await appendFile(`${currentDir}/files/output.txt`, txt);
    console.log("file successfully written!");

    console.log('end');
}
catch (error) {
    console.error(error);
}
