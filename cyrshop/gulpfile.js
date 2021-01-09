// 在这里书写gulp的打包配置文件

/* 
    gulp里面的方法
        1 src()
            == 用来找到你要打包的文件的
            == gulp.src('你要打包的文件')
            == 返回值:二进制流，就可以继续去调用别的方法
        2 pipe()
            == 用来帮你做事情的
            == 二进制流.pipe(你要做的事情)
            == 返回值:二进制流，就可以继续去调用别的方法
        3 dest()
            == 用来写入文件的
            == gulp.dest('你要写入的文件夹')
            == 你要把已经压缩的代码放在哪一个文件夹里面
            == 如果没有你指定的文件夹，会自动一个文件夹，然后把文件给你放进去
        4 parallel()
            == 用来并行执行多个任务的
            == gulp.parallel(你定义好的任务1,你定义好的任务2,...)
            == 他就会把这几个任务都给你执行了
            == 返回值：是一个任务流
            == 只要这个返回值一执行，就能把你准备好的几个任务都执行了
        5 series()
            == 用来串行执行多个任务的
            == gulp.series(你定义好的任务1,你定义好的任务2,你定义好的任务3，...)
            == 先开始任务1，任务1完成以后再开始任务2，任务2完成以后再开始任务3
            == 返回值：是一个任务流
            == 只要这个返回值一执行，就能把你准备好的几个任务都执行了
        6 watch()
            == 用来监控文件夹变化的
            == gulp.watch('监控的文件夹',文件夹里面内容变化以后要执行的任务)
*/


// 1 导入gulp这个第三方模块
const gulp = require('gulp')
const cssmin = require('gulp-cssmin');// 压缩css的包
const rename = require('gulp-rename');//文件重命名
const autoprefixer = require('gulp-autoprefixer');//给css属性加前缀 
const uglify = require('gulp-uglify');// 压缩js的模块
const babel = require('gulp-babel');//es6转es5
const htmlmin = require('gulp-htmlmin');// 压缩html的模块
const webserver = require('gulp-webserver');// 开启服务器的模块，是一个函数
const del = require('del');// 删除文件夹的模块
// 1 书写一个移动images文件夹的方法
function imgHandler(){
    return gulp.src('./src/images/**')  //images文件夹下的所有文件
    .pipe(gulp.dest('./dist/images'))
}

// module.exports.img = imgHandler;

// 2 书写一个移动lib文件夹的方法
function libHandler(){
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}

// module.exports.lib = libHandler;

// 3 书写一个压缩并移动css文件夹的方法
function cssHandler(){
    return gulp.src('./src/css/*.css')  //找到文件
    .pipe(autoprefixer()) //加前缀
    .pipe(cssmin())  //压缩
    // 在看cssmin文档的时候，发现了一个重命名的模块，尝试使用下:下载 导入 使用
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))  //移动
}
// module.exports.css = cssHandler;

// 4 书写一个压缩并移动js文件夹的方法
function jsHandler(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    })) // 把es6转es5
    .pipe(uglify())   // 压缩
    // .pipe(rename({suffix: '.min'}))   // 重命名
    .pipe(gulp.dest('./dist/js'))   // 移动
}
// module.exports.js = jsHandler;

// 5 书写一个压缩并移动html文件的方法
function htmlHandler(){
    return gulp.src('./src/pages/*.html') 
    .pipe(htmlmin({
        collapseWhitespace:true,  // 压缩所有空格，变成一行
        removeAttributeQuotes:true, //去除html属性值的引号
        minifyCSS:true, // 把html文件里面的style标签里面的压缩
        minifyJS:true,  // 把html文件里面的script标签里面的压缩
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true // 移除注释
    })) //压缩
    .pipe(gulp.dest('./dist/pages')) //移动
}
// module.exports.html = htmlHandler;

// 6 书写一个开启静态服务器的任务
function serverHandler(){
    return gulp.src('./dist') //找到要开启服务的跟目录
    .pipe(webserver({ // 需要一些配置项
        port:8080,//端口号
        open:'./pages/index.html',//输入ip自动打卡的页面
        livereload:true,//自动刷新浏览器，热启动
        proxies:[
            {
                // 每一个代理配置就是一个对象
                source:'/baike',
                target:"http://127.0.0.1/13gulp/2.php",
                // source:'/caihongpi',
                // target:"http://api.tianapi.com/txapi/caihongpi/index?key=9db427139e59e6758b41ecd825ea8c5e",

                //这种代理方式无法实现,被屏蔽了,建议用nginx代理实现
            },
            {
                // 每一个代理配置就是一个对象
                source:'/baike',
                target:"http://127.0.0.1/13gulp/2.php",
            }
        ]

    }))
}
// module.exports.server = serverHandler;

// 7 书写一个任务，删除dist目录
function delHandler(){
    return del(['./dist'])
}
// module.exports.del = delHandler;

// 8 自动监控文件
function watchHanlder(){
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/lib/**',libHandler);
    gulp.watch('./src/images/**',imgHandler);
}

// 第一次整合：把htmlHandler，jsHandler，cssHandler，imgHandler，libHandler合并
// module.exports.default = gulp.parallel(htmlHandler,jsHandler,cssHandler,imgHandler,libHandler)

// 第二次整合:
// 先完成任务:delHandler
// 先完成任务:htmlHandler，jsHandler，cssHandler，imgHandler，libHandler
// 再完成任务:serverHandler
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(htmlHandler,jsHandler,cssHandler,imgHandler,libHandler),
    serverHandler,
    watchHanlder
)

