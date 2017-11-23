const fs = require('fs');

const spawn = require('child_process').spawn;

const currentDir = __dirname;

// const newDir = `${currentDir}/rapgod`;
// console.log(newDir);

// let newDirExists = fs.existsSync(newDir);
// console.log(newDirExists);

// if (!newDirExists) fs.mkdirSync(newDir);

// newDirExists = fs.existsSync(newDir);
// console.log(newDirExists);
// const newFileLoc = `${newDir}/aNewFile.js`;
// let newFileExists = fs.existsSync(newFileLoc);
// if (!newFileExists) {
//   const call = spawn(`cd ${newDir} && touch aNewFile.js`, {
//     shell: true
//   });
//   call.on('exit', () => {
//     newFileExists = fs.existsSync(newFileLoc);
//     console.log('New file exist!!!', newFileExists);
//   });
// } else {
//   console.log('New file already exits!');
//   return;
// }

const gitUrl = 'https://github.com/phytertek/apier-todo-component.git';
const newGitDir = `${currentDir}/apier-todo-component`;
let newGitDirExists = fs.existsSync(newGitDir);
if (!newGitDirExists) {
  const call = spawn(`git clone ${gitUrl}`, { shell: true });
  call.on('exit', error => {
    if (error) console.error(error);
    console.log('git process exited');
    newGitDirExists = fs.existsSync(newGitDir);
    const config = require(newGitDir + '/config.js');
    console.log(config);
    console.log(newGitDirExists);
  });
} else {
  console.log('New git dir already exists?!?');
}
// https://github.com/phytertek/apier-todo-component.git
