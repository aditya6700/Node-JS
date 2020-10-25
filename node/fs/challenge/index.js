// Challenge 1

//  1: Create a folder  
//  2: Create a file in it and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name  
//  6: now delete both the file and the folder

const fs = require("fs");

// // creating a directory
// fs.mkdirSync("aditya");

// // creating file
// fs.writeFileSync('aditya/about.txt',"My name is Sai Aditya");

// // appending data to file
// fs.appendFileSync('aditya/about.txt',"\nI am learning Node Js")

// // reading data without buffer
// myData = fs.readFileSync('aditya/about.txt',"utf8");
// console.log(myData);

// // renaming file
// fs.renameSync('aditya/about.txt','aditya/aboutme.txt');

// // deleting file
// fs.unlinkSync('aditya/aboutme.txt');

// deleting directory
fs.rmdirSync("aditya");