PROMISES in Node

This doesn’t cover all of the solutions, but you will see how the basic functionality works in a few of the most popular HTTP libraries in Node.

Methods:

newPromises

ASYNC

node-fetch

promisify

AXIOS
Axios is a Promise based HTTP client for the browser as well as node.js. Using Promises is a great advantage when dealing with code that requires a more complicated chain of events. Writing asynchronous code can get confusing, and Promises are one of several solutions to this problem. They are even useful in other languages such as Swift.

HTTPS
Much of the HTTP, and the HTTPS, module’s functionality is fairly low-level. You’re required to receive response data in chunks rather than just providing a callback function to be executed as soon as all of the data is received. You also need to parse the response data manually. This is fairly trivial if it is JSON formatted, but it is still an extra step.

Request
Request is a fantastic option if you just want an easy to use library that deals with HTTP requests in a sane way. If you want to use Promises, you can check out the request-promise library.

SUPERAGENT (npm i superagent)
Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features

GOT
https://www.npmjs.com/package/got

dependencies
terminal:
node init
npm i node-fetch
npm i axios