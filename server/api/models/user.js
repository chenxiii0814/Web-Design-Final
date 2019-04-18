'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for user object.
 */
let UserSchema = new Schema({
    /**
     * Username of the user
     */
    UserName: {
        type: String,
        required: "UserName is required"
    },

    /**
     * Password of the user
     */
    Password:{
        type: String,
        required: "Password is required"
    },

    /**
     * Phone_number of the user
     */
    Phone_number: {
        type: String,
        required: "Phone number is required"
    },

    /**
     * email address of the user.
     */
    Email_address: {
        type: String,
        required: "Email is required"
    },
    
}, {
    versionKey: false
});

module.exports = mongoose.model('users', UserSchema);