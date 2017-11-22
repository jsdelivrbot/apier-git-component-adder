const fs = require('fs');

const spawn = require('child_process').spawn;

const currentDir = __dirname;

const newDir = `${currentDir}/rapgod`;
console.log(newDir);

let newDirExists = fs.existsSync(newDir);
console.log(newDirExists);

if (!newDirExists) fs.mkdirSync(newDir);

newDirExists = fs.existsSync(newDir);
console.log(newDirExists);
const newFileLoc = `${newDir}/aNewFile.js`;
let newFileExists = fs.existsSync(newFileLoc);
if (!newFileExists) {
  const callCommands = spawn(`cd ${newDir} && touch aNewFile.js`);
  callCommands.on('exit', () => {
    newFileExists = fs.existsSync(newFileLoc);
    console.log('New file exist!!!', newFileExists);
  });
} else {
  console.log('New file already exits!');
  return;
}
// https://github.com/phytertek/apier-todo-component.git
