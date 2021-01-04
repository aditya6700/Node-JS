const jwt = require('jsonwebtoken');
const Detail = require('../models/model');


const auth = async (req, res, next) => {
    try {

        // here in req.cookies.jwt    jwt is the cookie name
        const token = req.cookies.jwt; 

        // verifing user with the token saved in cookie with our secret key
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(verifyUser);

        // getting the user details using the id which we got from the JWT
        const user = await Detail.findOne({_id: verifyUser._id});
        // console.log(user)

        next();

    } catch (err) {
        res.status(401).render('error',{
            errormsg: err
        });
    }
};

module.exports = auth;