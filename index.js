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

const commands = [`cd ${newDir}`, 'touch aNewFile.js'];
const callCommands = spawn(commands.join(' && '));
callCommands.on('exit', () => {
  const newFileExists = fs.existsSync(`${newDir}/aNewFile.js`);
  console.log('New file exist!!!', newFileExists);
});
// https://github.com/phytertek/apier-todo-component.git
