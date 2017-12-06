const fs = require('fs');
const Git = require('nodegit');
// const spawn = require('child_process').spawn;

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

const runGit = async () => {
  try {
    let newGitDirExists = fs.existsSync(newGitDir);
    if (!newGitDirExists) {
      const clone = await Git.Clone(gitUrl, newGitDir);
      console.log(clone);
      newGitDirExists = fs.existsSync(newGitDir);
      console.log('newgitdir now exists???', newGitDirExists);
      if (newGitDirExists) {
        const config = require(`${newGitDir}/config`);
        console.log(config);
      }
    } else {
      console.log('New git dir already exists?!?');
    }
  } catch (error) {
    console.log(error);
  }
};

runGit();
