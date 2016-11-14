/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/11/14.
 */
/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/10/13.
 * 全景实现类
 */

//初始化资源
var getutil=require('../util/util'),
    util=new getutil.uitlRequire(),
    fs=util.$fs,        //文件模块
    path=util.$path;
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
module.exports={

    formdata:function(req,res){
        console.info('-000000000000');
       var rdata={
            a:req.body.name,
            b:req.body.pwd+'111'
        };
        var a=function () {
            this.t='222',
            this.b='332222223'
        };
        var p=new a();
        res.status(200).send(p)
    }
};

