/**
 * Created by wujietao on 2016/8/25.
 */
var express=require('express');  //  1.引入express组件
var router=express.Router();     //  2.用express创建一个路由中间件对象

//获取页面对info的请求
router.get('/',function(req,res,next){
    res.send('this is info request');
});

//导出上面创建的路由对象
module.exports = router;
