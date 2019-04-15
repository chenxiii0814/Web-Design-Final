/**
 * Controller for order list endpoints.
 */

'use strict';
//import order service.
const orderService = require('../services/order-service');
/**
 * Returns a list of orders in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (orders) => {
        response.status(200);
        response.json(orders);
    };
    orderService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new order with the request JSON and
 * returns order JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newOrder = Object.assign({}, request.body);
    const resolve = (order) => {
        response.status(200);
        response.json(order);
    };
    orderService.save(newOrder)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns an order object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (order) => {
        response.status(200);
        response.json(order);
    };
    orderService.get(request.params.orderId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns an order object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const order = Object.assign({}, request.body);
    const resolve = (order) => {
        response.status(200);
        response.json(order);
    };
    order._id = request.params.orderId;
    orderService.update(order)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes an order object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (order) => {
        response.status(200);
        response.json({
            message: 'Order Successfully deleted'
        });
    };
    orderService.delete(request.params.orderId)
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