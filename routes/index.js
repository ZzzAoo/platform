var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '用户登录 '});
});
router.get('/error', function(req, res, next) {
    res.render('projectList', { message: '1111111111111111111111111' });
});
module.exports = router;
//exports = module.exports = index