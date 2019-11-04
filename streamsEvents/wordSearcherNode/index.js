const fs = require("fs");
const path = require("path");

console.log("Open big file chunk by chunk and count a word");
console.log(" ");

// set default variables (word and filePath)
const [word = "you"
    , filePath = path.join(__dirname, "./input.txt")] = process.argv.slice(2);

let myReadStream = fs.createReadStream(filePath, "utf8");

let wordCounter = 0;
let chunkCounter = 0;

myReadStream.on("data", chunk => {
    chunkCounter++;
    if (chunk.toLowerCase().includes(word.toLowerCase())) {
        wordCounter++;
        console.log(`Reading chunk ${chunkCounter}`)
    };
});

myReadStream.on("end", () => {
    console.log("End of data");
    console.log("Number of chunk", chunkCounter);
    console.log(`Found ${word} ${wordCounter}`);
});

