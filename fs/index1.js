const fs = require("fs");

// // to create new file
// fs.writeFileSync('sample.txt',"welcome to node js");

// // overwrites the previous data
// fs.writeFileSync('sample.txt',"hope you know JavaScript");

// // add data to existing data
// fs.appendFileSync('sample.txt',"\nNode Js is a famous backend language");

// // read file data
// const buffer_data = fs.readFileSync('sample.txt');
// console.log(buffer_data);

// // Node.js includes an additional data type called Buffer
// // Buffer is mainly used to store binary data
// // while reading from a file or receiving packets from over the network

// original_data = buffer_data.toString();
// console.log(original_data);

// to rename a file
fs.renameSync('sample.txt','read.txt');