
/*
 * GET home page.
 */


exports.index = function(req, res){
  var client = require('./common/dbHelper.js').createConnect;
  client('select * from tb_user',function(results,fields){
    res.render('index', { title: 'Express',data:results[0] });
  });
};