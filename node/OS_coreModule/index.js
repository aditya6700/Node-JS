const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());

const free = os.freemem(); // output in bytes
console.log(`${free / 1024 / 1024 / 1024 }`); 

const total = os.totalmem(); // output in bytes
console.log(`${total / 1024 / 1024 / 1024 }`);