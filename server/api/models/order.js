'use strict';
const User = require("../models/user").schema;
const Item = require("../models/item").schema;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for order object.
 */
let OrderSchema = new Schema({
   
    //order ID
    OrderID: {
        type: String,
        required: "Order ID is required"
    },

   //user of the order
    User:{
        type: User,
        required: "User is required"
    },

    //item in order
    Item: {
        type: Item,
        required: "Item is required"
    },
    
}, {
    versionKey: false
});

module.exports = mongoose.model('orders', OrderSchema);