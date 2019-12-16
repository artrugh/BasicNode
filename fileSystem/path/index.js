// Path
// **********************************************************************

// the path module is used to work with different paths on our file system

//console.log(`Directory name: `, __dirname);
// The absolute path of the directory containing the currently executing file

console.log(`File name: `, __filename);
// The absolute path of the currently executing file

const path = require("path");

const basename = path.basename("Documents/x/node/path-fs/index.js");
const dirname = path.dirname("Documents/x/node/path-fs/index.js");
const extname = path.extname("Documents/x/node/path-fs/index.js");
const aPath = path.join("Document", "x", "node", "App");

// console.log(`Basename `, basename);
// console.log(`Dirname: `,dirname);
// console.log(`Extname: `, extname);
// console.log(`New Path`, aPath);

// Parse a path into an object

const parsedObj = path.parse("Documents/x/node/path-fs/index.js");
console.log(parsedObj);