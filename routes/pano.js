/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/10/13.
 */
var express=require('express'), //express组件
    router=express.Route(),      //路由中间件
    util=require('../util/util'),
    dao=new util.utilDao('panoDao');
//拦截获取全景请求;
// var data = '<?xml version="1.0" encoding="UTF-8"?><root><tag>text</tag></root>';
// function writeXml(){
//     // =""
//    var include='<include url="/pano/vtourskin.xml" />';
//     var scene,view,preview,image,cube="";
//     scene='<scene name="scene_hw_kt" title=""  thumburl="/pano/tlh/tlh001/thumb.jpg" lat="" lng="" heading="">';
//     view='<view hlookat="0" vlookat="0" fovtype="MFOV" fov="120" maxpixelzoom="2.0" fovmin="70" fovmax="140" limitview="auto" />';
//     preview='<preview url="/pano/tlh/tlh001/preview.jpg" />';
//     image='<image>';
//     cube='<cube url="/pano/tlh/tlh001/pano_%s.jpg" />';
//     cube+='<cube url="/pano/tlh/tlh001/mobile/pano_%s.jpg" devices="mobile" />'
//     return  '<?xml version="1.0" encoding="UTF-8"?>'+
//             '<krpano version="1.19">'+
//             include+scene+view+preview+image+cube+'</image></scene>'+
//             '</krpano>'
// }

module.exports=function(route){
    //通过全景漫游ID返回全景页面  * param:panoID 全景项目ID *
    route.get("/pano/:panoID",function(req,res,err) {
        var panoId=req.params.panoID;
        if(panoId!=1){
            // throw err;
            res.redirect('/pano');
            setTimeout(function(){
                // res.redirect('/pano',{"state":"000000"});
                // res.send("ssssssssss");
            },100);
        }
        res.send("ssssssssss");
        // res.writeHead(200, {'Content-Type': 'application/xml'});
        // console.info();
        // res.end(writeXml());
    });
    route.get("/pano",function(req,res,err) {
        //返回view目录pano.html.
        dao.parsexml(req,res);
    });
};