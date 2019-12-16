// // PROMISES IN NODE // //

// 3 states of a promise

// 1. pending
// 2. resolved
// 3.rejected

// Introduced in ES6

// A way for us to easily handle asynchronous requests

const blah = true;

// const promise = () => new Promise((resolve, reject) => {

//     if (blah) resolve("I have been resolved");
//     else reject("I have been rejected ...")
// });

// console.log(promise(blah));

// // CALLBACK HELL (pyramid of doom)


// This is not supossed to work. Just an example
// function getData (x) {
//     console.log(x);
//     const getMoreData = (x, y => {
//         console.log(y);
//         const getSomeMoreData = (y, z => {
//             console.log(z);
//         });
//     });
// };



// // // PROMISE ME ...

// This is not supossed to work. Just an example
// getData()
//     .then(x => {
//         console.log(x);
//         return getMoreData(x);
//     })
//     .then(y => {
//         console.log(y);
//         return getSomeMoreData(y);
//     })
//     .then(z => {
//         console.log(z);
//     })
//     .catch(() => {
//         console.log("error");
//     });

// getData(blah);

// // // //

// const promise = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.6) resolve("It's all good!")
//     else reject(new Error("It's all gone wrong ..."))
// });

// promise
//     .then(() => {
//         console.log(data);
//     })
//     .catch(() => {
//         console.log(error);
//     });

// console.log(`promise - `, promise);

// //  CHAINING PROMISES // //

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 is resolved")
//     }, 000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 is resolved")
//     }, 1000);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 is resolved")
//     }, 2000);

// })

// promise1
//     .then(data => {
//         console.log(data);
//         return promise2
//     })
//     .then(data2 => {
//         console.log(data2);
//         return promise3
//     })
//     .then(data3 => {
//         console.log(data3);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// promise1
//     .then(data => {
//         console.log(data);
//         promise2
//             .then(data => {
//                 console.log(data);
//                 promise3
//                     .then(data => {
//                         console.log(data);
//                     })
//             })
//     })
//     .catch(error => {
//         console.log(error);

//     });


// // PROMISE ALL // //

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 1 is resolved!")
//     }, 200);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 is resolved!")
//     }, 3000);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 3 is resolved!")
//     }, 500);
// })

// Promise.all([promise1, promise2, promise3])
//     .then(data => console.log(data[0], data[1], data[2]))
//     .catch(error => console.log(error));

// here the data argument inside the then() method is an ARRAY which contains
// promise values in the same order as defined in the promise array passed to Promise.all

// ------------------------------------------------------------------------

// ASYNC - AWAIT

// const who = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Count Dracula");
//             reject(error => console.log("error"));
//         }, 4000);
//     });
// };

// const what = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("lurks");
//             reject(error => console.log("error"));
//         }, 000)
//     });
// };

// const where = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("in the shadows.");
//             reject(error => console.log("error"));
//         }, 000)
//     });
// };

// const msg = async () => {
//     const a = await who();
//     const b = await what();
//     const c = await where();

//     console.log(a, b, c);

// };

// msg();

//no try it without await, what the change
// it console inmediately a, b and c without waiting <Pending/>

// // // -------- // // // // // // -------- // // //

// // NODE FETCH // //

// const fetch = require("node-fetch");

// const fetchUsers = async endpoint => {
//     try {
//         const res = await fetch(endpoint);
//         let data = await res.json();
//         data = data.map(user => user.name);
//         console.log(data)
//     } catch {
//         console.log(new Error("NONE working"));
//         return new Error("It's all gone wrong ...");
//     }
// };

// fetchUsers("https://jsonplaceholder.typicode.com/users");

// // // PROMISIFY // //

// // It converts a callback - based function to a Promise - based one

// const fs = require("fs");
// const data = "data.txt";

// fs.readFile(data, "utf8", (data, err) => {
//     if (data) {

//         console.log(data);

//     }
//     console.log(err);

// });


// //  WITH PROMISIFY

// fs = require("fs");
// const data = "data.txt";
// const { promisify } = require("util")
// const myReadFileAsync = promisify(fs.readFile);

// myReadFileAsync(data, "utf8")
//     .then(data => { console.log(data); })
//     .catch(err => console.log(new Error(err)));

// // // AXIOS // //
// // fetch an API with axios
// const axios = require("axios");

// // const baseURL ="https://official-joke-api.appspot.com/jokes/random";

// // axios.get(baseURL)
// // .then(res => {
// //     let joke = res.data;
// //     console.log(joke.setup);
// //     console.log(joke.punchline);
// // })


// const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
// const startPointURL = `${url}&date=2017-04-29`;
// const endPointURL = `${url}&date=2017-10-03`;



// // axios
// //     .get(url)
// //     .then(res => {
// //         console.log(res.data.url);
// //         console.log(res.data.explanation);
// //     })
// //     .catch(error => {
// //         console.error(error);
// //     });

// // // AXIOS.all() // //

// axios
//     .all([
//         axios.get(startPointURL),
//         axios.get(endPointURL)
//     ])
//     .then(
//         axios.spread((res1, res2) => {
//             console.log(res1.data.url);
//             console.log(res2.data.url);
//         })
//     )
//     .catch(error => {
//         console.error(error)
//     });

// // HTTPS module

const https = require('https')

// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });


// // Request (should be installed)
// // npm install request@2.81.0


// const request = require('request');

// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });


// SUPERAGENT
// you can set parameters, it is not necessary to do it manually
const superagent = require('superagent');

// superagent.get('https://api.nasa.gov/planetary/apod')
// .query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
// .end((err, res) => {
//   if (err) { return console.log(err); }
//   console.log(res.body.url);
//   console.log(res.body.explanation);
// });

const got = require('got');
 
(async () => {
    try {
        const response = await got('https://sindresorhus.com');
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();