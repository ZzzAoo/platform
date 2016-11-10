/**
 * Created by
 * User: ZzzAoo
 * Date: 2016/11/9.
 */
module.exports=function(grunt){

    // grunt入口配置
    grunt.initConfig({
        // 配置入口依赖包 package.json
        pkg:grunt.file.readJSON('package.json'),
        //代码压缩配置项
        uglify:{
            options:{
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src: 'public/js/<%= pkg.name %>.js',
                dest: 'public/build/<%= pkg.name %>.min.js'
            }
        }
        // ,
        // //语法检查配置项
        // jshint:{
        //     options:{
        //
        //     }
        // }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 在终端输入grunt的时候执行什么命令，有先后顺序
    grunt.registerTask('default', ['uglify']);
};