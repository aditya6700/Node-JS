// reading from a Stream
// Create a readable Stream
// Handle stream events --> data, end, and error

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {

    // METHOD -- 1

    // fs.readFile('streams.txt','utf8', (err,data) => {
    //     res.end(data);
    // });

    // METHOD -- 2

    // const rs = fs.createReadStream('streams.txt');
    // rs.on('data', (chunks) => {
    //     res.write(chunks);
    // });
    // rs.on('end', () => {
    //     res.end();
    // });
    // rs.on('error',(err) => {
    //     console.error(err);
    //     res.end('file not found');
    // });
 
    //METHOD -- 3
    const rs = fs.createReadStream('streams.txt');
    rs.pipe(res);

});

server.listen(1432, '127.0.0.1', () => {
    console.log('listening at port 1432');
});