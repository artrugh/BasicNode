const express = require("express");
const router = express.Router();

// DB
//const members = require("../../Members");
const {getMembers} = require("../../controllers/membersControllers");
const {findMember} = require("../../controllers/membersControllers");
const {addMember} = require("../../controllers/membersControllers");

// Gets all members
router.get("/", getMembers)
// Gets single member
// GET / localhost:5000/api/members/1 / SEND

router.get("/:id", findMember)

// Create member
router.post("/", addMember);

module.exports = router;

// POSTMAN- POST
// Headers / key: content-type, value: application-json
// Body/ raw (none by default)
// POST / localhost:5000/api/members / SEND