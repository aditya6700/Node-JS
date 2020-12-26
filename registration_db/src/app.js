const express = require("express");
const path = require('path');
const hbs = require('hbs');
const router = require('./routers/mernRoute');

require('./db/conn');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
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