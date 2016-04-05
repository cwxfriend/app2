/**
 * Created by chenwenxiao on 2016/3/31.
 */

exports.login = function(req,res) {
    var dbHelper = require('./../common/dbHelper.js');
    var client = dbHelper.createConnect;
    var splitSql = dbHelper.splitSql;
    var data = req.query;
    var sql = splitSql('select * from {{ 0 }} where userName ={{1}} and pwd = {{2}}', ['tb_user',data.uname,data.pwd]);
    client(sql, function (results, fields) {
        console.log(results);
        if (results.length == 0) {
            var obj = {
                desc: 'username or pwd is error',
                code: '999999'
            }
            res.send(JSON.stringify(obj));
        } else {
            var obj = {
                desc: 'success',
                code: '000000'
            }
            res.send(JSON.stringify(obj));
        }
    });
}