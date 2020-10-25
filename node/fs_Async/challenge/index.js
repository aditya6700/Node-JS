// Challenge 2

//  1: Create a folder  
//  2: Create a file in it and data into it.
//  3: Add more data into the file at the end of the existing data.
//  4: Read the data without getting the buffer data at first.
//  file encoding
//  5: Rename the file name  
//  6: now delete both the file and the folder

const fs = require('fs');

// fs.mkdir("aditya", (err) => {
//    console.log("folder created")
// });

// fs.writeFile('aditya/read_A.txt',"Asynchronous file operations", (err) => {
//    console.log("file created and data is added to it");
// });

// fs.appendFile('aditya/read_A.txt','\nMy name is Sai Aditya', (err) => {
//     console.log("data is appended");
// });

// fs.readFile('aditya/read_A.txt',"utf8", (err, data) => {
//     (err) ? console.log(err) : console.log(data);
// });

// fs.rename('aditya/read_A.txt','aditya/readme.txt', (err) => {
//     console.log("file rename successful");
// });

// fs.unlink('aditya/readme.txt',(err) => {
//     console.log("file is deleted");
// });

fs.rmdir('aditya', (err) => {
    console.log("folder deleted");
});