// ****************************
// FS
// ****************************

const fs = require("fs");

// two ways to read files - 
// synchronously - blocking
// asynchronously - non-blocking

const startingTime = new Date().getTime();

const getTimeAsync = () => {
    console.log("I am about to read a file asynchronously");
    fs.readFile("./data.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log("I run async", new Date().getTime() - startingTime);
        console.log(data);
        console.log("I am done async");
        console.log("------------------------------------");

    });
};

const getTimeSync = () => {
    console.log("I am about to read a file synchronously");
    const data = fs.readFileSync("./main.html", "utf8");
    console.log("I run sync", new Date().getTime() - startingTime);
    console.log(data);
    console.log("I am done sync");
    console.log("------------------------------------");
};

// getTimeAsync();
// getTimeSync();
// getTimeAsync();

const data = "post- rebar assault augmented reality into wonton soup neon digital. order-flow augmented reality military-grade network cyber- vehicle marketing shanty town. smart- media neural narrative uplink engine advert -space. tank-traps cartel cardboard crypto- fluidity man spook table. voodoo god convenience store rifle cartel order-flow into urban tiger-team. order-flow sign saturation point sign sprawl digital human table. face forwards concrete saturation point post- assassin nodality engine engine."

// // READ A FILE // //

const ReadFile = (file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log(data);
    });
};

// ReadFile("./data.txt");

// //WRITE OR REWRITE A FILE
// //fist argument = file, second= text, third= error

const WriteFile = (file, data) => {
    fs.writeFile(file, data, err => {
        if (err) throw err;
        console.log("Updated dataTwo file!");
    });
}

//WriteFile("./data.txt", "asdfasdffdasfd")

// //APPEND A TEXT TO A FILE

const AppendFile = (file, data) => {
    fs.appendFile(file, data, err => {
        if (err) throw err;
        console.log("Updated dataTwo file!");
    });
}

//AppendFile("./data.txt", data)

// // ***************************************************
// // JSON
// // ***************************************************

const ReadJSON = (file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err;
        const dataObj = JSON.parse(data);
        console.log(dataObj);
    });
};

// ReadJSON("./json.json");

// // Reading each property, printing in the console every property of a JSON
const ReadJSONeachProperty = (file) => {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err;
        const dataObj = JSON.parse(data);
        const looping = (dataObj) => {
            for (i in dataObj) {
                if (typeof dataObj[i] === "string") {
                    // dataObj[i].forEach(el => {
                    console.log(i, ":", dataObj[i]); //strings
                    // });
                } else {
                    looping(dataObj[i])
                }
            }
        }
        looping(dataObj)
    });
};


const WriteJSON = (file, data) => {
    data = JSON.stringify(data, null, 4)
    console.log(data);

    fs.writeFile(file, data, err => {
        if (err) throw err;
        console.log("Updated JSON file!");
    })
};

const obj = {
    name: "John",
    surname: "PoJohn",
    family: {
        a: "a",
        b: "b",
        c: {
            d: "d",
            e: "e"
        }
    }
}

//WriteJSON ("./newJSON.json", { x: "x", y: "x" });
//WriteJSON("./newJSON.json", obj);