const express = require('express');
const path = require("path");

// initialise express
const app = express();
//const members = require("./Members");

// initialize middleware
const logger = require("./middleware/logger");
//app.use(logger);


// example getting the server and sending something to it
// app.get("/", (req,res) =>{
//     res.send("<h1>Hello word!</h1>")
// });

// app.get("/", (req,res) =>{
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// set static folder
//app.use(express.static(path.join(__dirname, "public")));
// http://localhost:5000/about.html
// http://localhost:5000/index.html



// // // Body parser middleware
// // // add a new member
// app.use(express.json()); // lets us use json
// app.use(express.urlencoded({extended: false})) //handles from submission

// // // API Routes
// app.use("/api/members", require("./routes/api/members"));
app.use(logger);
app.use(express.json()); // lets us use json
app.use(express.urlencoded({ extended: false })); // handles form submission

app.use("/api/members", require("./routes/api/members"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));