const fs = require("fs");

const input = "./input.txt";
const output = "./output.txt";

const readStream = fs.createReadStream(input, "utf8"); // input = what?
const writeStream = fs.createWriteStream(output, "utf8", { flag: 'wx+' }); //output = where? location

// // DATA EVENT // //

// on() is a listener function
// emitter.on(eventname, listener)

// // this data event nest a function writeStream.write(res);  
// readStream.on("data", data => {
//     //console.log(typeof data); string
//     let res = data.toUpperCase();
//     console.log(res);
//    writeStream.write(res);   
//     //The write() method writes the specified string into a buffer
// });

//this one only print the data in the console
// readStream.on("data", function (data) {
//     //console.log(typeof data); // is a string
//     var chunk = data.toString(); //in case is not a string
//     console.log(chunk);
// });


// // ERROR EVENT // //  
// // consoling the error // //
writeStream.on('error', function (err) {

    console.log(err);

});

// what exactly is written in the empty file? 'this will fail if the file is there before hand'
// the event just print a message when the function is called
//writeStream.write('this will fail if the file is there before hand');


// // FD EVENT // //
// The open event will fire once a file is open, and ready to write to.
// The first element is the file descriptor of the file.

// writeStream.on('open', function (fd) {

//     console.log('file is open!');
//     console.log('fd: ' + fd);

// });


// // PIPE EVENT // //
// Pipes can be used to connect multiple streams together.
// One of the most common example is to pipe the read and write stream 
// together for the transfer of data from one file to the other.

writeStream.on('pipe', function () {

    console.log('semething is being piped in.');

});

//readStream.pipe(writeStream);

// //  END EVENT // //

readStream.on("end", () => {
    console.log("=============================================================");
});


// // EVENT // //

var events = require('events');
//console.log(typeof events); // function

var eventEmitter = new events.EventEmitter(); //We are defining an eventEmitter 
//type which is required for using the event-related methods.
//console.log(typeof eventEmitter); // object
// console.log( eventEmitter._events);

// EventEmitter {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//     _maxListeners: undefined }

eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});

// eventEmitter.emit('data_received');

// now only one print it once the console

eventEmitter.once('data_received', function () {
    console.log('data received succesfully.');
});

// eventEmitter.emit('data_received');
// eventEmitter.emit('data_received');
// eventEmitter.emit('data_received');




// // COUNT EVENTS // //
// Now when you invoke the listenerCount method on our data_received event, 
// it will send the number of event listeners attached to this event in the console.
// try it yourself

const eventEmitterSecond = events.EventEmitter;
// We are then defining an object called emitter
// which will be used to define our event handlers.
// != var eventEmitter = new events.EventEmitter();

// { [Function: EventEmitter]
//     once: [Function: once],
//     EventEmitter: [Circular],
//     usingDomains: false,
//     defaultMaxListeners: [Getter/Setter],
//     init: [Function],
//     listenerCount: [Function] }

//console.log(eventEmitterSecond.listenerCount(eventEmitter, 'data_received'));

// // PRINT A MESSAGE EACH TIME AND EVENT IS LISTENING //

eventEmitter.on('newListener', function (eventName) {
    console.log("Added listener for " + eventName + "events");
})

// eventEmitter.on('data_sended', function (){});
// eventEmitter.on('data_received', function (){});


const myStream = fs.createReadStream(input, "utf8");
console.log(myStream);

let chunkNumber = 1;
let word = "London";
let wordCounter = 0;

// The buffer splits the data into "chunks";

// myStream.on("data", chunk => {
// 	console.log(`Reading chunk no ${chunkNumber}`);
// 	chunkNumber++;
// 	console.log(chunk.length);

// 	let arr = chunk.split(" ");
// 	// creates an array of individual words

// 	arr.forEach(el => {
// 		if (el === word) wordCounter++;
// 	});
// 	console.log(`I found the word ${word} ${wordCounter} times`);
// 	 wordCounter = 0;
// });

myStream.on("end", () => {
	console.log("=============================================================");
});


