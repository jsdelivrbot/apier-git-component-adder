const fs = require('fs');

const currentDir = __dirname;
const indexDir = `${currentDir}/index.js`;
console.log('INDEX DIRECTORY >>>>>>>>>>>>', indexDir);

console.log('EXISTENCE CHECK >>>>>>>>>>>>', fs.existsSync(indexDir));
