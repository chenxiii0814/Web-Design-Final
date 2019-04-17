/**
 * Service for order operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Order = mongoose.model('orders');

/**
 * Returns an array of order object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Order.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new order object.
 *
 * @param {Object} order {Order object}
 */
exports.save = function (order) {
    const newOrder = new Order(order);
    const promise = newOrder.save();
    return promise;
};

/**
 * Returns the order object matching the id.
 *
 * @param {string} orderId {Id of the order object}
 */
exports.get = function (orderId) {
    const promise = Order.findById(orderId).exec();
    return promise
};

/**
 * Updates and returns the order object.
 *
 * @param {Object} order {Order object}
 */
exports.update = function (order) {
    order.modified_date = new Date();
    const promise = Order.findOneAndUpdate({_id: order._id}, order).exec();
    return promise;
};

/**
 * Deletes the order object matching the id.
 *
 * @param {string} orderId {Id of the order object}
 */
exports.delete = function (orderId) {
    const promise = Order.remove({_id: orderId});
    return promise;
};