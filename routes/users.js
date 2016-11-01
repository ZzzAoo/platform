var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('userList', { title: '测试用户列表11' });
});
// 注册
router.post('/register', function(req, res, next) {
    userDao.register(req, res, next);
});
//登录
router.get('/login', function(req, res, next) {
    userDao.login(req, res, next);
});
router.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});
module.exports = router;