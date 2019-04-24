'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for item object.
 */
let ItemSchema = new Schema({
    
    //item name
    ItemName: {
        type: String,
        required: "Item name is required"
    },

    //item price
    Price:{
        type: Number,
        required: "Price is required"
    },

    //item ingredient
    Ingredient: {
        type: String,
        required: "Ingredient is required"
    },
    
}, {
    versionKey: false
});

module.exports = mongoose.model('items', ItemSchema);