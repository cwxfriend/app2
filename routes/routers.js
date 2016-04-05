/**
 * Created by chenwenxiao on 2016/3/31.
 */
exports.routers = function(app){
    var routes = require('../routes');
    var user = require('./user');
    var login = require('./login');
    app.get('/', routes.index);
    app.get('/users', user.list);
    app.get('/login', login.init);
};