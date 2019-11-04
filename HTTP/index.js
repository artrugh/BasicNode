// // HTTP // //

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("Hello word!");
        res.end(); // ends response
    }
    if (req.url === "/home") {
        res.write("Welcome to home!");
        res.end(); // ends response
    }
})

server.listen(3000);

console.log("Listenening on port 3000...");

// The request response cycle = req, res.write(), res.end()

