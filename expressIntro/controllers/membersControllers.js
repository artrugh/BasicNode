// Members controllers

// Lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync"); // FileSync is a function which retunr an obeject
const adapter = new FileSync("db.json"); // reads and writes to database
const db = low(adapter);

// uuid package
const uuid = require("uuid");
//DB
const members = require("../Members");

exports.getMembers = (req, res) => {

	db.defaults({
		members: [{
			id: 1,
			name: "Cybill Shepherd",
			email: "cs.outlook.de",
			status: "inactive"
		}]
	}).write();

	const members = db.get("members")
		.value()
	res.status(201).send(members);

	//without lowdb
	//res.json(members);
}

exports.findMember = (req, res) => {

	const id = req.params.id;

    const member = db.get('members')
        .find({ id: id })
        .value()

    res.status(201).send(typeof member == "undefined" ?
        "No member with this id." :
        member);
	
	//without DB
	// const member = members.filter(member => member.id == req.params.id);
	// console.log(member.length);

	// if (member.length == 0) {
	// 	return res.status(400).json({ message: "No member with this ID" });
	// }
	// res.json(member);
}

exports.addMember = (req, res) => {

	const newMember = req.body;
	if (!newMember.name || !newMember.email) {
		res.status(201).send("Each member needs a name and an email.");
	}

    db.get("members")
        .push(newMember)
        .first()
        .assign({ id: uuid.v4() })
        .write()

    res.status(201).send("Succed! Now you are a member.");

	// without DB
	// const newMember = {
	// 	id: uuid.v4(),
	// 	name: req.body.name,
	// 	email: req.body.email,
	// 	status: "active"
	// };

	// if (!newMember.name || !newMember.email) {
	// 	return res.status(400).json({ message: "Please include a name and email" });
	// }
	// members.push(newMember); // adds to our array
	// res.json(members); // sends

};