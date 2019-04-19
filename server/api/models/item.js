'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for item object.
 */
let ItemSchema = new Schema({
    /**
     * name of item
     */
    ItemName: {
        type: String,
        required: "Item name is required"
    },

    /**
     * price of item
     */
    Price:{
        type: Number,
        required: "Price is required"
    },

    /**
     * ingrediants of the item
     */
    Ingredient: {
        type: String,
        required: "Ingredient is required"
    },
    
}, {
    versionKey: false
});

module.exports = mongoose.model('items', ItemSchema);