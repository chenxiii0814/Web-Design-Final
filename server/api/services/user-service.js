/**
 * Service for user operations.
 */

'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('users');

/**
 * Returns an array of user object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = User.find(params).exec()
    return promise;
};

/**
 * Saves and returns the new user object.
 *
 * @param {Object} user {User object}
 */
exports.save = function (user) {
    const newUser = new User(user);
    const promise = newUser.save();
    return promise;
};

/**
 * Returns the user object matching the id.
 *
 * @param {string} userId {Id of the user object}
 */
exports.get = function (userId) {
    const promise = User.findById(userId).exec();
    return promise
};

/**
 * Updates and returns the user object.
 *
 * @param {Object} user {User object}
 */
exports.update = function (user) {
    user.modified_date = new Date();
    user.modified_user = new User();
    const promise = User.findOneAndUpdate({_id: user._id}, user,{new:true}).exec();
    return promise;
};

/**
 * Deletes the user object matching the id.
 *
 * @param {string} userId {Id of the user object}
 */
exports.delete = function (userId) {
    const promise = User.remove({_id: userId});
    return promise;
};
