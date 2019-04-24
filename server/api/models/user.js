'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for user object.
 */
let UserSchema = new Schema({
   
    //user name
    UserName: {
        type: String,
        required: "UserName is required"
    },

    //user password
    Password:{
        type: String,
        required: "Password is required"
    },

   //user phone_number
    Phone_number: {
        type: String,
        required: "Phone number is required"
    },

    //user email_address
    Email_address: {
        type: String,
        required: "Email is required"
    },
    
}, {
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);