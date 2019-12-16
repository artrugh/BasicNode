// VALIDATOR

const validator = require("validator");

const test1 = validator.isEmail("iads@sfadfsd.com");
const test2 = validator.isEmail("iads@sfadfsdcom");
const test3 = validator.normalizeEmail("JUfddfaFf@Hofdsn.com")

// console.log(test3);

// REGULAR EXPRESSIONS (REGEX)
// A regular expression is a sequence of characters used for parsing strings.
// There are often used to perform searches and validate string data.

// ^ means from the beginning of the string,

// $ means to the end of the string,

// <anything>+ means at least one anything.

// That said,

// ^[A-Z]+$ means the string should only contains uppercased chars,

// ^[a-z]+$ means the string should only contains lowercased chars.

const string = "D1";
//const regex = /window|short|panda|one/i;
// const regex = /^([\w\-]{0,1000})$/ 
const length = /^[a-zA-Z]{6,12}$/
const uppercase = /[A-Z]+/
const lowercase  = /[a-z]+/
const number =  /[0-9]+/
const number2 = /\d/
// const diversity = /!./i


const isWindow = number2.test(string);
console.log(isWindow);

// PASSWORD REGEX

// - 6 to 12 characters in length +
// - must have at least one uppercase letter
// - must have one lowercasa letter
// - must have at least one digit
// - should contains other characters


