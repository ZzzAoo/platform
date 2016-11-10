var good=function(){
    this.name=arguments[0],
    this.age=arguments[1],
    console.info(name+age);
    return "姓名："+name+"\n"+"年龄："+age
};
var exgood=new good("jack",20);
exgood();