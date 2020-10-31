const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send("<h1> Welcome to Home page we are learning Express </h1>");
});

app.get('/about',(req,res) => {
    res.status(200).send("Welcome to About page we are learning Express");
});

app.get('/jsondata',(req,res) => {
    res.send([
        {
        id: 1,
        name : "Sai Aditya",
        email: 'dsaiaditya@gmail.com',
        },
        {
            id: 1,
            name : "Sai Aditya",
            email: null,
            },
    ]);

    // or 

    // res.json([
    //     {
    //     id: 1,
    //     name : "Sai Aditya",
    //     email: 'dsaiaditya@gmail.com',
    //     },
    //     {
    //         id: 1,
    //         name : "Sai Aditya",
    //         email: null,
    //         },
    // ]);
});

// Both the methods res.json() and res.send() are identical when an object or 
// array is passed, but res.json() will aso convert non-objects, 
// such as null and undefined, which are not valid JSON


app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});

// if you have multiple data to write to an api
// use res.write()
//     ..
//     ..
//     ..
//     ..
//     res.send()   ------- to end sending response