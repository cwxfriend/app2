/**
 * Created by chenwenxiao on 2016/3/30.
 */

//密码
var DATABASE_PWD = '1234';
//用户名
var DATABASE_USER = 'root';
//数据库
var DATABASE_DB = 'test';
//依赖库
var mysql = require('mysql');


/*
*处理sql语句占位符的方法
* 使用方法示例：
* var sql = splitSql('select * from {{ 0 }} where userName ={{1}} and pwd = {{2}}', ['tb_user',data.uname,data.pwd]);
* 转换结果：
* select * from tb_user where userName ='sdsdf' and pwd ='sdsfs'
* 注意：
* {{0}}转换为字符串为 'tb_user',{{ 0 }} 转换字符串为 tb_user
* */
var splitSql = function(str,parton) {
    try {
        for (var i = 0; i < parton.length; i++) {
            var f = str.indexOf('{{'),b = str.indexOf('}}');
            if(b - f==3){
                //处理需要添加双引号的部分
                str = str.replace(str.substring(f, b + 2), sqlDefender(parton[str.substring(f + 2, b).trim()]));
            }else if(b -f ==5) {
                //常规处理
                str = str.replace(str.substring(f, b + 2), parton[str.substring(f + 2, b).trim()]);
            }
        }
    }catch(e){
        console.log('字符串：' + str);
        console.log('填写格式无法被识别，转换失败！');
        str = '';
    }
    return str;
}


/*避免意外字符的处理方式，防止sql注入*/
var sqlDefender = function(str){
    str = "'" + str.replace("'",'"') + "'";
    return str;
}


/*
*创建sql链接并执行sql语句，返回结果
* sql:执行的sql语句
* fn:执行sql语句以后的回调函数
* */
var createConnect = function(sql,fn){
    var conn = mysql.createConnection({
        user: DATABASE_USER,
        password: DATABASE_PWD,
    });
    conn.connect();
    conn.query("use " + DATABASE_DB);
    conn.query(sql,function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            if(results)
            {
                try {
                    fn(results,fields);
                }catch(e){}
            }
            conn.end();
        }
    );
}
exports.createConnect = createConnect;
exports.splitSql = splitSql;


