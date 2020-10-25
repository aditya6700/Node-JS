const fs = require('fs');

// there should be always a callback function 
// when you use asynchronous functions

// // create a file
// fs.writeFile('read.txt',"This is example for asynchronous file functions",(err) => {
//     console.log("file is created");
//     if (err) console.log(err);
// });

// // append to a file
// fs.appendFile("read.txt","\nAlways use a callback function", (err) => {
//     console.log("succesfully data added");
// });

// read data from a file
fs.readFile("read.txt","utf8", (err, data) => {
   (err) ? console.log(err) : console.log(data); 
});

