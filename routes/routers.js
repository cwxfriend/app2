/**
 * Created by chenwenxiao on 2016/3/31.
 */
exports.routers = function(app){
    var index = require('./api/index');

    app.get('/', index.index);

    /*userҳ��·��*/
    app.get('/users',  function(req,res){
        res.render('user');
    });

    /*��¼ҳ��·��*/
    app.get('/login', function(req,res){
        res.render('login');
    });

    /*����ҳ��·��*/
    app.get('/test', function(req,res){
        res.render('common/test');
    });
};