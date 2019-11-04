const movie = require("./movies");

const args = process.argv.slice(2);

// SOME PRINTS TO GET WHAT WE ARE WORKING WITH //

// console.log(args.length); // 0
// console.log(typeof args); // object
// console.log(typeof movie); // function
// console.log(typeof movie(args)); // string "Sorry, try another name."

console.log(movie(args)); 

