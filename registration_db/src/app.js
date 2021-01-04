require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const cookieParser = require('cookie-parser')
const router = require('./routers/mernRoute');

require('./db/conn');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

const staticPath = path.join(__dirname,'../public/');
const partialPath = path.join(__dirname,'../templates/partials/');
const viewsPath = path.join(__dirname,'../templates/views/');

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

app.use(router);

app.listen(port,() => {
    console.log(`running on port ${port}`);
});

// cookie-parser is used to get cookies from the browser
// to use it we use app.use(cookieParser())

// to load all the .env variables always require dotenv.config() at the top of the main file