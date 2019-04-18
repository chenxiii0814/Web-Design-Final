/**
 * User endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const userController = require('../controllers/user-controller');
    // User Routes for search and create.
    app.get('/',function(req,res){
        res.send("hello users!!!")
    })
    

    app.route('/users')
        .get(userController.list)
        .post(userController.post);

    // User Routes for get, update and delete.
    app.route('/users/:userId')
        .get(userController.get)
        .put(userController.put)
        .delete(userController.delete);
};