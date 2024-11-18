const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(path.join(dirPath, `test${i}.txt`), 'content nhi batayege');
// }
// console.log(dirPath);

// fs.readdir(dirPath, (error, files)=>{
//     console.log(files);
// })


fs.readdir(dirPath, (error, files)=>{
    files.forEach((item)=>{
        console.log("file name is: ", item);
    })
})