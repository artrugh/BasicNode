const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json"); // reads and writes to database

//set the database
const db = low(adapter);

// // set defaults for the database
db.defaults({
	records: []
}).write();

// lets add a record
const album = {
	artist: "The Fall",
	title: "Bend Sinister",
	year: 1981
};

// push and write to db

db.get("records")
	.push(album)
	.write();

//*************************************************************** */

console.log(db.getState());

//************************************************************** */