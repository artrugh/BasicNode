const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("find.json"); // reads and writes to database

const db = low(adapter);

db.defaults({
    users: []
}).write();

const users = db.get("users");

// add a user if we don't have any

if (users.value().length === 0) {
    // if it is empty create this users
    const userNames = ["Sylvia", "Kohei", "Rufus"];
    userNames.forEach(name => {
        // push each object looping the array
        users
            .push({
                name: name,
                lastVisit: new Date(),
                visits: 5
            })
            // and finally write it(lowdb function)
            .write();
    });
}

// finally get the db, search inside if it matchs your user
const test = db
    .get("users")
    .find({ name: "Kohei" })
    .value();

console.log(test);
console.log(db.getState());