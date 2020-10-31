const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

const staticpath = path.join(__dirname, '../public');

app.use(express.static(staticpath))  // builtin middleware

app.get('/', (req,res) => {
    
});

app.get('/contact', (req,res) => {
    res.send('This is Contact page');
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});