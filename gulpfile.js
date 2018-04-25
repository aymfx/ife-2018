const gulp = require('gulp')
const sass = require('gulp-sass')
const babel = require("gulp-babel"); 
const baseUrl = "resume";
const inputcss = './docs/' + baseUrl + '/commons/css/*.scss';
const inputjs = './docs/' + baseUrl + '/commons/js/*.js';
const inputimg = './docs/' + baseUrl + '/commons/images/*';
const outputcss = './docs/' + baseUrl + '/css';
const outputjs = './docs/' + baseUrl + '/js';
const outputimg = './docs/' + baseUrl + '/images';
console.log(inputcss,outputcss,);
gulp.task('scss', function () {
    return gulp.src(inputcss)  //scss路徑
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(outputcss));
});

gulp.task("es6", function () {
    return gulp.src(inputjs)// ES6 源码存放的路径  
        .pipe(babel({
            presets: ['es2015']
        })).on('error',function(err){
            console.log('es6 Error!', err.message);
            this.end();
        })
        .pipe(gulp.dest(outputjs)); //转换成 ES5 存放的路径  
});

gulp.task('img', function () {
    return gulp.src(inputimg)
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest(outputimg));
});


//监听

gulp.task('run', function () {
    gulp.watch(inputcss, ['scss']);
    gulp.watch(inputjs, ['es6']);
});