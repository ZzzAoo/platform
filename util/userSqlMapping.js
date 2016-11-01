// CRUD SQL语句
var user = {
    insert:'INSERT INTO user(name, pwd) VALUES(?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user',
    loginSql:'select * from vr_user where name = ? and pwd =?',
    registerSql:'insert into vr_user(name,pwd) values(?,?)'
};

module.exports = user;