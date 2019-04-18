/**
 * Order endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const orderController = require('../controllers/order-controller');
    // Order Routes for search and create.
    app.route('/orders')
        .get(orderController.list)
        .post(orderController.post);

    // Order Routes for get, update and delete.
    app.route('/orders/:orderId')
        .get(orderController.get)
        .put(orderController.put)
        .delete(orderController.delete);
};