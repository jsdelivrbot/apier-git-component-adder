const fs = require('fs');

const currentDir = __dirname;

const newDir = `${currentDir}/rapgod`;
console.log(newDir);

let newDirExists = fs.existsSync(newDir);
console.log(newDirExists);

if (!newDirExists) fs.mkdirSync(newDir);

newDirExists = fs.existsSync(newDir);
console.log(newDirExists);
