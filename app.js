var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');

//指定应用路径测试-----
var routes = require('./routes/index');
var users = require('./routes/users');
//项目管理
var project = require('./routes/project');
var pano = require('./routes/pano');
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/html'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
ejs.open = '{{';
ejs.close = '}}';
app.set("view options",{
    "open":"{{",
    "close":"}}"
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'views/Mpano/zhtml/')));
//绑定/应用
 app.use('/', routes)
    .use('/index', routes)
    .use('/users', users)
    .use('/project', project);
//绑定index
app.use('/index', routes);
//绑定users
app.use('/users', users);
//绑定project(项目)
app.use('/project', project);
// app.use(express.router(pano));
pano(app);

app.all('/*',function (req,res) {
    next();
})

// 输出日志到目录
var fs = require('fs');
var accessLogStream = fs.createWriteStream(__dirname + '/log/access.log', {flags: 'a',  encoding:'utf8'}); // 记得要先把目录建好，不然会报错
app.use(logger('combined', {stream: accessLogStream}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//app.listen(3000);
module.exports = app;
