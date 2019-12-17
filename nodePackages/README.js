// SOME PACKAGES USED TO CREATE AN APP IN NODE.
// to install them use NPM
// let's have a look individually.

// 1. EXPRESS
// npm i express
// Fast, unopinionated, minimalist web framework for node.

const express = require('express')
const app = express()

//fetching
app.get('/', (req, res) => {
  res.send('Hello World')
})
// listen the app in the 3000 port
app.listen(3000)

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 2. MORGAN
// npm i morgan
// HTTP request logger middleware for node.js
// Morgan is basically a logger, on any requests being made,it generates logs automatically. Morgan is a popular HTTP request middleware logger for Node.js and basically used as a logger. It can be used with node js' winston package to consolidate HTTP request data logs with other information.

var morgan = require('morgan')
app.use(morgan('dev'));

// what is a logger?
// In computing, a log file is a file that records either events that occur in an operating system or other software runs, or messages between different users of a communication software. Logging is the act of keeping a log. ... Many operating systems, software frameworks and programs include a logging system

// go deeper 
// https://blog.logrocket.com/creating-a-logger-in-node-js/


// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 3. COOKIES-PARSER
// npm i cookie-parser
// Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.

// semantic:

var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 4. DEBUG
// npm install debug
// A tiny JavaScript debugging utility modelled after Node.js core's debugging technique. Works in Node.js and web browsers.

// debug exposes a function; simply pass this function the name of your module, and it will return a decorated version of console.error for you to pass debug statements to. This will allow you to toggle the debug output for different parts of your module as well as the module as a whole.

// 5. ROUTERS from express
// routers in express

const router = express.Router()

//this function is a controller/ get-post-delete
router.get("path", (this - is - a - controller))
router.post()
router.put()
router.delete()

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 6. LOWDB
// npm i lowdb
// small JSON database for Node / good idea for a prototype

// example:

// CONTROLLERS
// plain fetching APIs functions (req, res, next) that access to the lowdb

// (get everything)
// /get by id = params
// /post body

exports.getRecords = (req, res, next) => {
  const records =
    db.get('records')
      .value()
  res.status(200).send(records);
}

exports.addRecord = (req, res, next) => {
  const record = req.body;
  db.get('records')
    .push(record)
    .last()
    .assign({ id: Date.now().toString() })
    .write()
  res.status(200).send(record);
}

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 6. MONGOOSE
// npm i mongoose
// Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

const mongoose = require("mongoose");

// devMode
mongoose.connect("mongodb://localhost:27017/record-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

//productionMode

mongoose.connect(env.db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// and then

mongoose.connection.on("error", console.error);
mongoose.connection.on("open", () => {
  console.log("Database connection established...");
});

// create Models (Schemas) and Seeds

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 6. mongoose in MODELS

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true //header always need it, if not it returns an error
  },
  record: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Order", OrderSchema);

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------


// 6. mongoose in SEED
// the seed is not exported and then imported in the app,
// so it should be node. node seed.js
// the function is called and it deletes or fills the database

// // in PACKAGE.JSON   

{
  "scripts": {
    "start": "node ./bin/www",
      "watch": "DEBUG=record-shop:* nodemon --inspect ./bin/www --ignore 'data/*'",
        "seed": "node seed/seed_db.js",
          "purge": "node seed/purge_db.js"
  }
}

// seed.js

const mongoose = require("mongoose");
const Record = require("../models/Record");

(async () => {

  //Connect to DB
  mongoose.connect("mongodb://localhost:27017/record-shop", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
  //Catch error
  mongoose.connection.on("error", console.error);
  //Console a message when it is open
  mongoose.connection.on("open", () => {
    console.log("Database connection established...");
  });

  console.log("This is the purge");

  try {
    await Record.deleteMany({});
    console.log("Records purged");
  } catch (err) {
    console.error(err);
  }

  // create an Array with 5 variables,
  // set them in null,
  // map it and replace them with data, creating a Record from the faker API

  const recordPromises = Array(5)
    .fill(null)
    .map(() => {

      // Record is the module, an object, so use the schema
      const record = new Record({
        title: faker.name.title(),
        artist: faker.company.companyName(),
        year: faker.random.number({ min: 1960, max: 2019 }),
        img: faker.image.nightlife(),
        price: faker.commerce.price()
      });
      //save the record
      return record.save();
    });

  try {
    await Promise.all(recordPromises);
    console.log("The records are seeded");
  } catch (e) {
    console.error(e);
  }
  // remember to close the connection
  mongoose.connection.close();
})();

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 7. HTTPS - ERRORS
// catch and handler errors
// npm i http - errors

createError(state, "error message").

// example

var createError = require('http-errors')
var express = require('express')
var app = express()

app.use(function (req, res, next) {
  if (!req.user) return next(createError(401, 'Please login to view this page.'))
  next()
})

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 8. EXPRESS - VALIDATOR
// npm i express - validator
// Validate data for the user schema.
// create validation.js

// require body and validationResult from express
const { body, validationResult } = require("express-validator");

//create validation rules
const userValidationRules = () => {
  return [
    body("email")
      .isEmail()
      .normalizeEmail()
      .trim()
      .withMessage("Your email is looking funky..."),
    body("password")
      .isLength({ min: 10 })
      .withMessage("The minimum length is 10 characters, dummy."),
    body("firstName")
      .exists()
      .trim()
      .escape()
      .withMessage("Give us your first name damnit.")
  ];
};

//create a Promise
const validate = (req, res, next) => {

  //get possible errors
  const errors = validationResult(req);
  //if it is empty, 0 errors, next
  if (errors.isEmpty()) {
    return next();
  }
  // otherwise create and array

  const extractedErrors = [];

  //map the errors and pass them to the array as an object, param: msg

  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  //return status 433 and the array
  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  validate
};

// // in the controllers
// when the user is added

const { validationResult } = require("express-validator");

exports.addUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const user = new User(req.body);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

// // in App.js

const { userValidationRules, validate } = require("./validators/validator");

middlewarefunctions in the routes
app.use("/users", userValidationRules(), validate, usersRouter);

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 9. Relations

// Relationships in MongoDB represent how various documents are logically related to each other.Relationships can be modeled via Embedded and Referenced approaches.Such relationships can be either 1: 1, 1: N, N: 1 or N: N.

// Let us consider the case of storing addresses for users.So, one user can have multiple addresses making this a 1: N relationship.

// This approach maintains all the related data in a single document, which makes it easy to retrieve and maintain.The whole document can be retrieved in a single query such as −

// https://www.tutorialspoint.com/mongodb/mongodb_relationships.htm

// each order should have a relation with the record which has been sold 

const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  record: [
    {
      // use ref and type
      ref: "Record",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

module.exports = mongoose.model("Order", OrderSchema);

// and this relation should be defined in the controllers

const orders = await Order.find().populate("record", "-__v -price -year");
const user = await User.findById(req.params.id).select("-password -__v");

// *
//   Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query.Let's look at some examples.Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s). We may populate a single document, multiple documents, plain object, multiple plain objects, or all objects returned from a query. Let's look at some examples.

// The ref option is what tells Mongoose which model to use during population, in our case the Story model.All _ids we store here must be document _ids from the Story model.

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 10. TOKENs - JWT - JSON web tokens
// https://jwt.io/
// npm i jsonwebtoken

// The general concept behind a token - based authentication system is simple.Allow users to enter their username and password in order to obtain a token which allows them to fetch a specific resource - without using their username and password.Once their token has been obtained, the user can offer the token - which offers access to a specific resource for a time period - to the remote site.

// create an ecryption.js in validation folder
// npm i bcrypt
// A library to help you hash passwords.

const bcrypt = require("bcrypt");

exports.encrypt = async text => {
  if (!text) return "";
  return await bcrypt.hash(text, 10);
};

exports.compare = async (text, hash) => {
  return await bcrypt.compare(text, hash);
};

// user.model should include token

const jwt = require("jsonwebtoken");
const superSecretKey = "superSecretKey";
const encryption = require("../lib/validation/encryption");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },

    // new part
    role: {
      type: String,
      enum: ["Admin", "User"],
      required: true
    },

    tokens: [
      {
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }
    ],

    password: {
      type: String,
      required: true
    },

    address: Address
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

UserSchema.methods.generateAuthToken = function () {
  const user = this;
  const access = "auth";

  const token = jwt
    .sign({ _id: user._id.toHexString(), access }, superSecretKey)
    .toString();

  user.tokens.push({ access, token });

  return token;
};

UserSchema.methods.getPublicFields = function () {
  let returnObject = {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    _id: this._id
  };
  return returnObject;
};

UserSchema.methods.checkPassword = async function (password) {
  const user = this;
  return await encryption.compare(password, user.password);
};

UserSchema.statics.findByToken = function (token) {
  const User = this;

  let decoded;

  try {
    decoded = jwt.verify(token, superSecretKey);
  } catch (e) {
    return;
  }

  return User.findOne({
    _id: decoded._id,
    "tokens.token": token,
    "tokens.access": "auth"
  }).select("-password -__v");
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await encryption.encrypt(this.password);
  next();
});

module.exports = mongoose.model("User", UserSchema);

// // in the controllers User.js

exports.addUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const user = new User(req.body);
    const token = user.generateAuthToken();
    await user.save();
    const data = user.getPublicFields();
    res
      .status(200)
      .header("x-auth", token)
      .send(data);
  } catch (e) {
    next(e);
  }
};

// // this is completely new

exports.loginUser = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email });
    const valid = await user.checkPassword(password);
    if (!valid) throw new createError.NotFound();

    const token = user.generateAuthToken();
    const data = user.getPublicFields();

    res
      .status(200)
      .header("x-auth", token)
      .send(data);
  } catch (e) {
    next(e);
  }
};

// // in middleware folder authetificator.js

const User = require("../models/User");
const createError = require("http-errors");

const auth = async (req, res, next) => {
  const token = req.header("x-auth");

  try {
    const user = await User.findByToken(token);
    if (!user) throw new createError.NotFound();

    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = auth;

// and rolesAuthentificator.js

const createError = require("http-errors");

const isAdmin = async (req, res, next) => {
  const role = req.user.role;
  if (role !== "Admin") next(new createError.NotFound());
  next();
};

module.exports = isAdmin;

// // and finally in the routes/ order and user.js

const auth = require("../middleware/authenticator");
const isAdmin = require("../middleware/rolesAuthenticator");

router
  .route("/")
  .get(auth, isAdmin, getOrders)
  .post(auth, addOrder);

router
  .route("/:id")
  .get(auth, getOrder)
  .delete(auth, deleteOrder)
  .put(auth, updateOrder);

module.exports = router;

router
  .route("/")
  .get(auth, getRecords)
  .post(auth, isAdmin, addRecord);

router
  .route("/:id")
  .get(auth, getRecord)
  .delete(auth, isAdmin, deleteRecord)
  .put(auth, isAdmin, updateRecord);

router
  .route("/")
  .get(auth, isAdmin, getUsers)
  .post(validateInputs(userValidationRules), addUser);

router.route("/login").post(loginUser);

router
  .route("/:id")
  .get(auth, getUser)
  .delete(auth, deleteUser)
  .put(auth, updateUser);

// // // // ------------------------- // // // // ------------------------- // // // // -------------------------

// 11. DEPLOYMENT
// differences between development and production
// https://flaviocopes.com/node-difference-dev-prod/
// npm i now
// https://zeit.co/docs

// ZEIT Now is a cloud platform for static sites and Serverless Functions.It enables developers to host websites and web services that deploy instantly, scale automatically, and requires no supervision, all with no configuration.

// To deploy with ZEIT Now, you will need to install Now CLI, a frequently updated, and open - source, command - line interface.

// // create now.json

{
  "name": "ds-record-store",
    "builds": [{ "src": "app.js", "use": "@now/node" }],
      "version": 2,
        "routes": [{ "src": "/(.*)", "dest": "app.js" }]
}

// // create configuration/configuration.js

const { env } = process;

const config = {
  env: env.NODE_ENV || "development"
};

const devConfig = {
  db: "mongodb://localhost:27017/record-shop",
  jwt_key: "iamaverysecretkey"
};

const prodConfig = {
  db:
    "mongodb+srv://<username>:<password>@record-shop-test-ejhsh.mongodb.net/test?retryWrites=true&w=majority",
  jwt_key: "iamaverysecretkey"
};

const currentConfig = config.env === "production" ? prodConfig : devConfig;

module.exports = Object.assign({}, config, currentConfig);

// // and then imported in the App.js

const env = require("./config/config.js");

// change the local host to your server

// no more this // // //

mongoose.connect("mongodb://localhost:27017/record-shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// // but this // // //

mongoose.connect(env.db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// // in package.json

"remote": "NODE_ENV=production DEBUG=record-shop:* nodemon --inspect ./bin/www",