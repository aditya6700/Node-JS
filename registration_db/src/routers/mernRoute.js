const express = require("express");
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth')
const Detail = require("../models/model");

const router = new express.Router();

router.get("/", (req, res) => {
    res.render("index");
});


// auth acts as a middlware for authentication
router.get("/special", auth, (req, res) => {
    // console.log(req.cookies.jwt);
    res.render("special");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    try {
        const { password, re_password } = req.body;

        if (password === re_password) {
            const registerData = new Detail({
                firstname: req.body.firstname,
                lasttname: req.body.lasttname,
                email: req.body.email,
                gender: req.body.gender,
                phone: req.body.phone,
                age: req.body.age,
                password,
                re_password,
            });


            const token = await registerData.genterateAuthToken();
            // The res.cookie() function is used to set the cookie name to value.
            // The value parameter may be a string or object converted to JSON.
            // Syntax:
            //      res.cookie(name, value ,[ options])

            // HttpOnly is a flag that can be included in a Set-Cookie response header.
            // The presence of this flag will tell browsers to not allow client side script
            // access to the cookie (if the browser supports it)

            // secure: true is a flag that works only with HTTPS protocol

            res.cookie("jwt",token,{
                expires: new Date(Date.now() + 40000 ),
                httpOnly: true,
                // secure: true
            });

            const result = await registerData.save();

            res.status(201).render("index");
        } else {
            res.status(401).send("passwords does not match");
        }
    } catch (err) {
        res.status(401).send(err);
    }
});

router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        // Without hashing
        // const result = await Detail.findOne({ $and : [{email}, {password}] });
        // if (result) {
        //     res.status(201).render('index')
        // } else {
        //     throw new Error('Invalid login Details')
        // }


        // with hashing
        const resultData = await Detail.findOne({email});
        const hashOk = await bcrypt.compare(password,resultData.password);

        // JWT tokens
        const token = await resultData.genterateAuthToken();

        // saving JWT in cookies
        res.cookie("jwt",token,{
            expires: new Date(Date.now() + 40000),
            httpOnly: true,
            // secure: true
        });

        if (hashOk) {
            res.status(201).render('index');
        } else {
            throw new Error('Invalid login Details')
        }
    } catch (err) {
        res.status(401).render('error',{
            errormsg: err
        });
    }
});

router.get('*', (req,res) => {
    res.status(401).render('error',{
        errormsg: 'Error 404 Page Not Found'
    });
})

module.exports = router;