var express = require('express');
var router = express.Router();
var projectDao=require('../dao/projectDao');
var async = require('async');
var mysql = require('mysql');
var $conf = require('../config/config');
var $util = require('../util/util');
var $sql = require('../util/projectSqlMapping');
// 测试上传图片
router.get('/img', function(req, res, next) {
    console.info("img");
    res.render('img');
});
    //上传图片
router.post('/tImg', function(req, res, next) {
       projectDao.testexce(req,res);
});
// 进入项目管理，返回项目管理表的数据
router.get('/queryAll', function(req, res, next) {
    projectDao.queryAll(req, res, next);
});
//新增项目
router.get('/add',function(req,res,next){
    projectDao.search(req, res, next);
//    res.render('projectAdd',{message:'新增项目'})
});
router.post('/projectAdd',function(req,res,next){
    projectDao.testAdd(req,res,next);
});
router.get('/operation/:type/:id',function(req,res,next){
    projectDao.opertion(req,res,next)
});
//查询省市级联数据
//router.get('/getCity:id',function(req,res){
//    res.render('projectAdd',{});
//});
router.get('/getCity/:type/:id', function(req, res,next){
    // if(req.params.type&&req.params.id!=='undefined'){
        projectDao.getCity(req,res,next);
    // }
        // res.send('id'+req.params.id+req.params.type)
});
module.exports = router;