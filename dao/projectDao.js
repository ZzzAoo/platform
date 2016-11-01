// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../config/config');
var $util = require('../util/util');
var $sql = require('../util/projectSqlMapping'),
    // async = require('async'),
    fs    =require('fs'),
    formidable = require('formidable'),
    // multiparty=require('multiparty'),
    // xml = require('xml'),
// 使用连接池，提升性能
    pool  = mysql.createPool($util.extend({}, $conf.mysql));

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
var child_pro = require('child_process');
var panoVarible={
    arr:[],
    sum:0,
    count:0,
    _arr:function(imgPath,runCount){
        return '';
    }
}
var arr="";
var sum=0;
var count=0;
function object(o) {
    function F(){
    }
    F.prototype = o;
    return new F;
}

function add(p,count,res){
    // console.info('要疯了----------------'+sum)
    arr+=" "+p;
    console.info('正在处理第'+count+'张');
    // console.info('arr:'+arr+'count:'+count+'--sum:'+sum+'--length:'+arr.length);
    if(count==sum){
        console.info('处理完毕,调用切图程序');
        execfile2(arr,res);
    }else{

    }
}
var vapanoVarible=object(panoVarible);
// krpano切片程序
var execfile2=function(path,res){
    var last=child_pro.exec("cmd /c start D:/MuiFile/krpano/krpano-1.19-pr5/house.bat "+path.slice(1,path.length)+"");
    if(sum>0||count>0){
     sum=0;count=0;arr="";
    }
    last.on('exit', function (code) {
        panoVarible.arr=[];
        panoVarible.count=0;
        panoVarible.sum=0;
        console.log('切图程序执行完毕,关闭子进程，代码：' + code);
        res.redirect('/pano');
    });
    // console.info(process.pid+"---"+process.title+"--"+path);
}

// 文件解析与保存
// function _fileParse1() {
//     form.parse(req, function (err, fields, files) {
//         if (err) throw err;
//             var filesUrl = [];
//             var errCount = 0;
//             var keys = Object.keys(files);
//             keys.forEach(function(key){
//                 var filePath = files[key].path;
//                 var fileExt = filePath.substring(filePath.lastIndexOf('.'));
//                 if (('.jpg.jpeg').indexOf(fileExt.toLowerCase()) === -1) {
//                     errCount += 1;
//                 } else {
//                     //以当前时间戳对上传文件进行重命名
//                     var fileName = new Date().getTime() + fileExt;
//                     var targetFile = path.join(targetDir, fileName);
//                     //移动文件
//                     fs.renameSync(filePath, targetFile);
//                     // 文件的Url（相对路径）
//                     filesUrl.push('E:/uploads/'+fileName)
//                 }
//             });
//         // 返回上传信息
//         res.json({filesUrl:filesUrl, success:keys.length-errCount, error:errCount});
//     });
// }

module.exports = {
    testexce:function(req,res){
        var form = new formidable.IncomingForm();
        // form.uploadDir = 'E:/uploads/';   //文件保存在系统临时目录
        form.uploadDir=path.join(__dirname, '../public/uploads/');
        form.maxFieldsSize = 2 * 1024 * 1024;  //上传文件大小限制为最大1M
        form.keepExtensions = true;        //使用文件的原扩展名
        sum++;
        var targetDir =  form.uploadDir;
            // path.join(__dirname, '../public/upload');
        // 检查目标目录，不存在则创建
        fs.access(targetDir, function(err){
            if(err){
                fs.mkdirSync(targetDir);
            }
            _fileParse();
        });
        // 文件解析与保存
        var _append="";
        var _path="";

        function _fileParse() {

            form.parse(req, function (err, fields, files) {
                if (err){
                    res.send({"state":"上传失败"});
                    throw err;
                }

                var filesUrl = [];
                var errCount = 0;
                var keys = Object.keys(files);
                keys.forEach(function(key){
                    var filePath = files[key].path;
                    var fileExt = filePath.substring(filePath.lastIndexOf('.'));
                    if (('.jpg.jpeg').indexOf(fileExt.toLowerCase()) === -1) {
                        errCount += 1;
                    } else {
                        //以当前时间戳对上传文件进行重命名
                        var fileName = new Date().getTime() + fileExt;
                        // var targetFile = path.join(targetDir, fileName);
                        vapanoVarible.arr.push(fileName.slice(0,fileName.length-5));
                        var targetFile=targetDir+fileName;
                        count++;
                        //移动文件
                        fs.renameSync(filePath, targetFile);
                        // 文件的Url（相对路径）
                        filesUrl.push('/uploads/'+fileName);
                        add(targetFile,count,res);
                    }
                });
                res.send({state:"上传成功",success:'上传成功'});
            });
        }
    },
    testAdd:function(req,res,next){
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
//            var param = req.query || req.params;
            // 建立连接，向表中插入值
            var param =  req.body;
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.inserttest, [param.proName,param.proCity,param.proArea,param.proType,param.proState,
                param.proPrice,param.proFeature,param.proTel,param.proInfo,param.proInSale,param.proImg], function(err, result) {
                if(result.affectedRows > 0) {
                    res.redirect('/project/queryAll');
                } else {
                    res.render('error',  {
                        result: result
                    });
                }
                console.log(result);
                connection.release();
            });
        });
    },
    getCity:function(req,res,next){
        var cityID=+req.params.id;
        pool.getConnection(function(err, connection) {
            connection.query($sql.getCityById, cityID, function(err, result) {
                if(result.length>0){
                    console.log('查询城市记录条数'+result.length);
                } else {
                    console.log("没有查询到数据");
                    result=[{
                        id:'0',
                        name:'无下级数据'
                    }];
                    // result = void 0;
                }
                if(err)
                    throw err;
                jsonWrite(res, result);
                // jsonWrite(res, result);
                console.log(result);
                connection.release();
            });
        });
    },
    projectAdd: function (req, res, next) {
        // 建立连接
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            var param =  req.body;
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.inserttest, [param.proName],
                function(err, result) {
                  if (err)
                        throw err;
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功'
                    };
                }else{
                    result = {
                        code: 400,
                        msg:'失败'
                    };
                }
                 $util.jsonParse(res, result);
                connection.release();
            });
        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, rows) {
                if (err)
                    throw err;
                res.render('projectList', {
                    title : 'User List',
                    project : rows
                });
            });
            connection.release();
        });
    },
    addImg: function (req, res) {
        res.header( 'Content-Type','text/javascript;charset=utf-8');        //设置返回字符串编码
        var form = new formidable.IncomingForm();                            //创建对象
        //设置临时文件存放的路径
        form.uploadDir = "E:/uploads/";
        //设置上传数据的编码
        form.encoding='utf-8';
        //设置是否保持上传文件的拓展名
        form.keepExtensions = true;
        //文件大小
        form.maxFieldsSize = 2 * 1024 * 1024;
        var files = [];
        form.on('file', function (filed, file) {
            files.push([filed, file]);
        });
        form.parse(req, function(err, fields, files) {
            if (err) {
                res.render('err', { title: err });
                return;
            }
            console.log(files);
            //后缀名
            var extName = '';
            // 判断上传的图片是否是符合规范
            switch (files.proImg.type) {
                case 'image/pjpeg':
                    extName = 'jpg';
                    break;
                case 'image/jpeg':
                    extName = 'jpg';
                    break;
            }

            if(extName.length == 0){
                res.send('图片格式错误，只限JPG/JPEG');
                return;
            }
            var avatarName = Date.parse(new Date()) + '.' + extName;
            // 重组上传的文件
            var newPath = form.uploadDir + avatarName;
            //移动文件到新位置
            fs.renameSync(files.proImg.path, newPath);
            // 判断文件是否存在
            fs.exists(newPath, function (exists) {
                if(!exists){
                    console.log(newPath + ' not exists.');
                    res.send({"state":"上传失败"});
                }else{
                    console.log(newPath + ' 文件存在.');
                    // execFile();
                    // execFile1();
                    execfile2(newPath);
                    res.send({"state":"上传成功"});
                }
            });

        });
    },
    uploadImg: function (req, res, next) {
        pool.getConnection(function(err, connection) {
           var param= req.query || req.params;
            connection.query($sql.insertImg,[param.proImg],function(err,result){
                if(result.affectedRows > 0) {
                    res.redirect('/project/queryAll');
                } else {
                    res.render('error',  {
                        result: result
                    });
                }
                console.log(result);
            });
            connection.release();
        });
    },
    search: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query('select * from vr_city where provinceCode=440000', function(err, rows) {
                if (err)
                    throw err;
                //res.send('The solution is: ', rows[0]);
                //res.send('user id is:'+req.params.id);
                res.render('projectAdd', {
                    rr : '新增项目',
                    project : rows
                });
                //console.log('The solution is: ', rows);
            });
            connection.release();
        });
    },
    opertion:function(req, res, next){
        var paramId=+req.params.id;
        pool.getConnection(function(err,connection){
            connection.query('delete from vr_project where proId =?',paramId,function(err,result){
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                res.redirect('/project/queryAll');
                // jsonWrite(res, result);
                console.log(result);
                connection.release();
            });
        });
    }
};