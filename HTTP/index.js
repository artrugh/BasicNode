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
    if (req.url !== "/home" || req.url !== "/" ) {
        res.write("not Found");
        res.end(); // ends response
    }
})

//here you should write your url / in this case localhost
server.listen(3000);

console.log("Listenening on port 3000...");
// console.log(http);


// The request response cycle = req, res.write(), res.end()

