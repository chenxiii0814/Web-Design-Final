'use strict';
module.exports = function (app) {
    //Initialize models
    let userModel = require('./models/user');

    //Initialize routes
    let userRoutes = require('./routes/user-route');
    userRoutes(app);
};

module.exports = function (app) {
    //Initialize models
    let itemModel = require('./models/item');

    //Initialize routes
    let itemRoutes = require('./routes/item-route');
    itemRoutes(app);
};

module.exports = function (app) {
    //Initialize models
    let orderModel = require('./models/order');

    //Initialize routes
    let orderRoutes = require('./routes/order-route');
    orderRoutes(app);
};