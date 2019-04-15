/**
 * Controller for item list endpoints.
 */

'use strict';
//import item service.
const itemService = require('../services/item-service');
/**
 * Returns a list of items in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (items) => {
        response.status(200);
        response.json(items);
    };
    itemService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new item with the request JSON and
 * returns item JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newItem = Object.assign({}, request.body);
    const resolve = (item) => {
        response.status(200);
        response.json(item);
    };
    itemService.save(newItem)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns an item object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (item) => {
        response.status(200);
        response.json(item);
    };
    itemService.get(request.params.itemId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns an item object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const item = Object.assign({}, request.body);
    const resolve = (item) => {
        response.status(200);
        response.json(item);
    };
    item._id = request.params.itemId;
    itemService.update(item)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes an item object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (item) => {
        response.status(200);
        response.json({
            message: 'Item Successfully deleted'
        });
    };
    itemService.delete(request.params.itemId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};