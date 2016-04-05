/**
 * Created by chenwenxiao on 2016/3/30.
 */

var createConnect = function(sql,fn){
    var DATABASE_PWD = '1234';
    var DATABASE_USER = 'root';
    var DATABASE_DB = 'test';
    var mysql = require('mysql');
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


