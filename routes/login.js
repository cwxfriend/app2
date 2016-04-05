/**
 * Created by chenwenxiao on 2016/3/31.
 */

exports.init = function(req, res){
    res.render('login');
}
exports.login = function(req,res){
    var client = require('./common/dbHelper.js').createConnect;
    var data = req.query;
    var sql = 'select * from tb_user where userName ="' + data.uname + '" and pwd = "' + data.pwd + '"' ;
    client(sql,function(results,fields){
        console.log(results);
        if(results.length ==0){
            var obj = {
                desc:'username or pwd is error',
                code:'999999'
            }
            res.send(JSON.stringify(obj));
        }else{
            var obj = {
                desc:'success',
                code:'000000'
            }
            res.send(JSON.stringify(obj));
        }
    });
}
