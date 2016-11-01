//工具类
module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    jsonParse: function (res, ret) {
        if(typeof ret === 'undefined') {
            res.json({
                code:'1',
                msg: '操作失败'
            })
        } else {
            res.json(ret);
        }
    },
    /**
     * util:工具模块
     * config：数据库连接池
     * sql：sql语句模块
     * mysql：mysql中间件
     * async：异步中间件
     * fs：文件操作中间件
     * formidable 文件上传中间件
     * child_pro：子进程中间件
     * xml：json转xml中间件
     * pool：打开连接池
     * */
    uitlRequire:function(){
        this.$util = require('../util/util'),
        this.$config = require('../config/config'),
        this.$sql = require('../util/projectSqlMapping'),
        this.$mysql = require('mysql'),
        this.$async = require('async'),
        this.fs    = require('fs'),
        this.$formidable = require('formidable'),
        this.$multiparty = require('multiparty'),
        this.$child_pro = require('child_process'),
        this.$xml = require('xml'),
        this.$path = require('path'),
        this.$pool = this.$mysql.createPool(this.$util.extend({}, this.$config.mysql));

    },
    //提取在路由模块中中引入dao实现类
    utilDao:function(dao){
        console.info(dao);
        return require('../dao/'+dao+'');
    }

}