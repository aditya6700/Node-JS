const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = 8000;

const app = express()
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname, '../templates/partials');

app.set('view engine','hbs');         // to set the view engine
app.set('views', templatepath);      // setting views
hbs.registerPartials(partialpath);     // registering partials

// template engine route
app.get("/",(req,res) => {
    res.render('index',{
        props:'aditya',
    });
});

// using partials
app.get('/contact', (req,res) => {
    res.render('contact');
});

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/query', (req,res) => {
    res.render('query',{
        name: req.query.name,
        city: req.query.city,
    }); 
    console.log(req.query);
});

// error page operator '*'
app.get('/about/*',(req,res) => {
    res.render('error',{
        myerror: 'oops further about page not found !',
    });
});


app.get('*',(req,res) => {
    res.render('error',{
        myerror: 'oops page not found !',
    });
});

app.listen(port,() => {
    console.log(`listening to port ${port}`);
});