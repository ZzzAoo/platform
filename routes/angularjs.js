/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/11/14.
 */
var express=require('express'),     //express组件
    router=express.Router(),         //路由中间件
    util=require('../util/util'),   //加载util工具类
    dao=new util.utilDao('angularDao');
router.all('*',function (req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
router.options('/p', function(req, res, next) {
    next();
});
router.post('/p', function(req, res, next) {
    // res.header('Access-Control-Allow-Origin', '*');
    dao.formdata(req,res);
});
router.get('/p_data', function(req, res, next) {
    dao.formdata(req,res);
});

module.exports = router;