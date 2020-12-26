const mongoose = require('mongoose');
const validator = require('validator');

const mernSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lasttname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "email already exists"],
        trim: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("enter valid email");
            }
        }
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: [10,"enter 10 valid phone number"],
    },
    age: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    re_password:{
        type: String,
        required: true,
    }


});

const Detail =  mongoose.model('Detail',mernSchema);

module.exports = Detail