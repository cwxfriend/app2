/**
 * Created by chenwenxiao on 2016/3/31.
 */

exports.apiList = function(app){
    var login = require('./login');
    app.get('/api/getUserList', function(req, res){
        res.send("respond with a resource");
    });

    //��¼�ӿڣ�����uname��pwd�����
    app.get('/api/getLogin', login.login);
};