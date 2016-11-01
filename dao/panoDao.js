/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/10/13.
 * 全景实现类
 */

//初始化资源
var getutil=require('../util/util'),
    util=new getutil.uitlRequire(),
    fs=util.$fs;        //文件模块
    mysql=util.$mysql,  //mysql
    // pool=util.$pool,    //pool
    xml=util.$xml, //xml
    path=util.$path,
    writexml=function(){    //构建xml的方法
        // var xml = xmlparse({
        //     // node:'text content',
        //     krpano1:[
        //         {name:'taco',text:'beef taco',children:{salsa:'hot!'}},
        //         {name:'taco',text:'fish taco',attrs:{mood:'sad'},children:[
        //             {name:'salsa',text:'mild'},
        //             'hi',
        //             {name:'salsa',text:'weak',attrs:{type:2}}
        //         ]},
        //         {name:'taco',attrs:'mood="party!"'}
        //     ],

            //<scene name="scene_hw_kt" title="客厅" onstart="" thumburl="%SWFPATH%/panos/hjbs/hw_kt/thumb.jpg" lat="" lng="" heading="">
            // <view hlookat="-178.792" vlookat="5.750" fovtype="MFOV" fov="120.000" maxpixelzoom="2.0" fovmin="70" fovmax="140" limitview="auto" />
            // <preview url="%SWFPATH%/panos/hjbs/hw_kt/preview.jpg" />
            // <image>
            // <cube url="%SWFPATH%/panos/hjbs/hw_kt/pano_%s.jpg?nocache=%$random%" />
            // <cube url="%SWFPATH%/panos/hjbs/hw_kt/mobile/pano_%s.jpg?nocache=%$random%" devices="mobile" />
            // </image>
            // <!-- place your scene hotspots here -->
            // <hotspot name="spot1" style="hotzw" ath="-78.721" atv="11.290" linkedscene="scene_hw_zw" ondown="draghotspot();"/>
            // <hotspot name="spot2" style="hotcw" ath="-151.847" atv="-0.141" linkedscene="scene_hw_cw" />
            // <hotspot name="spot3" style="hotct" ath="155.885" atv="1.479" linkedscene="scene_hw_ct" />
            // <hotspot name="spot5" style="hotyc" ath="-115.768" atv="-2.201" linkedscene="scene_hw_yc" />
        //     krpano:[
        //         {name: 'include', attrs: {url: '%SWFPATH%/skin/vtourskin.xml'}},
        //         {name: 'scene', attrs:{name:'scene_hw_kt',title:'客厅',thumburl:"%SWFPATH%/panos/hjbs/hw_kt/thumb.jpg"}
        //             ,children:[
        //             {name:'view',attrs:{hlookat:'-178.792',vlookat:"5.750",fovtype:"MFOV",fov:"120.000",maxpixelzoom:"2.0",fovmin:"70",fovmax:"140",limitview:"auto" }}
        //         ]}
        //     ]
        // },{xmlheader:true});
        console.info(xml.toString());
        return '<kk>'+xml.toString()+'</kk>';
    },
    xmlWrite=function(callback){
        var elem = xml.element({ _attr: { decade: '80s', locale: 'US'} });

        // var stream = xml({ toys: elem }, { stream: true });
        // stream.on('data', function (chunk) {
        //     // console.log("data:", chunk)
        // });
        // elem.push({ toy: 'Transformers' });
        // elem.push({ toy: 'GI Joe' });
        // elem.push({ toy: [{name:'He-man'}] });
        elem.close();
        // console.log(xml({a: [{ _attr: { attributes: 'are fun', too: '!' }}, 1]}));
        // var kr=({
        //     krpano:[{_attr:{version:'1.19'}},
        //         {include:[                      //字节点
        //             {_attr:{url:'%SWFPATH%/skin/vtourskin.xml'}}
        //         ]}
        //     ]
        // });
        // <scene name="scene_hw_kt" title="客厅" onstart="" thumburl="%SWFPATH%/panos/hjbs/hw_kt/thumb.jpg" lat="" lng="" heading="">
        var kr_elem=xml.element({_attr:{version:'1.19'}});  //krpano element
        var include=xml.element({_attr:{url:'%SWFPATH%/skin/vtourskin.xml'}});
        var scene=xml.element({_attr:{name:'scene001',title:'客厅',thumburl:'%SWFPATH%/panos/hjbs/hw_kt/thumb.jpg'}});
        var krpano=xml({krpano:kr_elem},{stream:false});
        var appendXml="";
        krpano.on('data', function (chunk,call) {
            appendXml+=chunk;
            console.log("data:", chunk);
        });
            kr_elem.push({include:include});
            kr_elem.push({scene:scene});
            kr_elem.close();
        console.info(xml(krpano)+'ssssssssssssssss');
        console.info(appendXml+"lllllllll");

}

module.exports={
    //请求返回全景的xml
    parsexml:function(req,res){
        res.writeHead(200, {'Content-Type': 'application/xml'});
        var header='<?xml version="1.0" encoding="UTF-8"?><node>1111</node>'
        // var ww=writexml();
        var ww='<?xml version="1.0" encoding="utf-8"?><node><parent><taco>beef taco<salsa>hot!</salsa></taco><taco mood="sad">'+
            'fish taco<salsa>mild</salsa>hi<salsa type="2">weak</salsa></taco><taco mood="party!"/></parent><parent2><hi>is a nice thing to say</hi>'+
            '<node>i am another not special child node</node><date>Thu Oct 20 2016 16:34:04 GMT+0800 (中国标准时间)</date></parent2></node>'
        res.end(xmlWrite());
    }
}

