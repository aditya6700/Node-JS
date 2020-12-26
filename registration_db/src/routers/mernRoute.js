const express = require('express');
const Detail = require('../models/model');
const router = new express.Router();

router.get('/',(req,res) => {
    res.render('index');
});

router.get('/login',(req,res) => {
    res.render('login');
});

router.get('/register',(req,res) => {
    res.render('register')
})

router.post('/register', async (req,res) => {
     try {
        
        const password = req.body.password;
        const re_password = req.body.re_password;

        if (password === re_password) {
            
            const registerData =  new Detail({
                firstname: req.body.firstname,
                lasttname: req.body.lasttname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password,
                re_password
            });

            const resu = await registerData.save();
            res.status(201).render("index");

        }else{
            res.status(401).send("passwords does not match");
        }


     } catch (err) {
        res.status(401).send(err);
     }
})

module.exports = router