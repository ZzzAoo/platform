// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../config/config');
var $util = require('../util/util');
var $sql = require('../util/userSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param = req.query || req.params;
            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.insert, [param.name, param.pwd], function(err, result) {
                if(result) {
                    result = {
                        code: 2010,
                        msg:'增加成功'
                    };
                }
                // 以json形式，把操作结果返回给前台页面
//                jsonWrite(res, result);
                $util.jsonParse(res, result);
//                res.render('error',{message:'嘿嘿',result:result});
                // 释放连接
                connection.release();
            });
        });
},
    queryAll: function (req, res, next) {
        console.log('info1');
        pool.getConnection(function(err, connection) {
//            console.log(err);`
            connection.query($sql.queryAll, function(err, result) {
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    //注册
    register:function (req, res, next) {
        var params=req.body;
        pool.getConnection(function(err,connection){
            connection.query($sql.registerSql,[params.userName,params.password],function(err,rows){
                if(err)
                    throw err;
                if(rows.affectedRows>0){
                    console.log(rows);
                }
                jsonWrite(res, rows);
                connection.release();
            });
        });
    },
    login:function (req, res, next) {
        var name=+req.query.userName;
        var pwd=+req.query.password;
        pool.getConnection(function(err,connection){
            connection.query($sql.loginSql,[name,pwd],function(err,rows){
                if(err)
                    throw err;
                if(rows.length>0){
                    console.log(rows);
                }
                jsonWrite(res, rows);
                connection.release();
            });
        });
    }

};