/**
 * Created by chenwenxiao on 2016/3/31.
 */
exports.routers = function(app){
    var index = require('./api/index');

    app.get('/', index.index);

    /*user页面路由*/
    app.get('/users',  function(req,res){
        res.render('user');
    });

    /*登录页面路由*/
    app.get('/login', function(req,res){
        res.render('login');
    });

    /*测试页面路由*/
    app.get('/test', function(req,res){
        res.render('common/test');
    });
};