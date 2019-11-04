// load external resources

const { prepareString } = require('./formatting');
const { showHelp } = require("./messaging")

const args = process.argv.slice(2);

showHelp(args)
console.log(prepareString(args));




