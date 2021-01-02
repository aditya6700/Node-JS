const express = require("express");
const Detail = require("../models/model");
const bcrypt = require('bcryptjs');

const router = new express.Router();

router.get("/", (req, res) => {
    res.render("index");
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

        if (hashOk) {
            res.status(201).render('index')
        } else {
            throw new Error('Invalid login Details')
        }
    } catch (err) {
        res.status(401).send(`${err}`);
    }
});

module.exports = router;