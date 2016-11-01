// CRUD SQL语句
var project = {
    insert:'INSERT INTO vr_project(proName,proCity,proArea,proState,proPrice,proImg,proFeature,proTel,proType,proInSale,proInfo) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
    inserttest:'insert into vr_project(proName,proCity,proArea,proType,proState,proPrice,proFeature,proTel,proInfo,proInSale,proImg) ' +
                 'values(?,?,?,?,?,?,?,?,?,?,?)',
    update:'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from vr_project',
    insertImg:'insert into vr_project(proImg) values (?)',
    getCityById:'select id,name from vr_town where citycode=?'
};

module.exports = project;