console.log(global);
console.log(typeof global); //object
console.log(process.argv.slice(2));

const _ = require("lodash");

console.log(_.isString(true));
console.log(_.includes([1,2,3,4,5], 4));
console.log(_.upperFirst("berlin"));
console.log(_.kebabCase("Node js"));
console.log(_.add(100,25));
console.log(_.random(0, 1000));


const obj = {
    name: "j",
    surname: "b"
}

console.log(Object.entries(obj));


for (let [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});



