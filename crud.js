const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;

// creating file
// fs.writeFileSync(filePath, 'Hello curding?');

// reading file
// fs.readFile(filePath,'utf8', (error, item)=>{
//     console.log(item);
// });

// appending file
// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err) console.log("File is updated");
// })

// rename file
// fs.rename(filePath, `${dirPath}/fruits.txt`, (err)=>{
//     if(!err) console.log("File is updated");
// });

// delete file
fs.unlinkSync(`${dirPath}/fruits.txt`)