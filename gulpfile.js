import gulp from "gulp";
import gulpSass from "gulp-sass";
import sass from "sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import browserSyncPackage from "browser-sync";

const browserSync = browserSyncPackage.create();
const dartSass = gulpSass(sass);

function errorlog(err) {
    console.error(err.message);
    this.emit("end");
}

function style() {
    return gulp
        .src("scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(
            dartSass({
                silenceDeprecations: ["legacy-js-api"],
            }).on("error", errorlog)
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        proxy: "https://theseattlesun.local/",
    });

    gulp.watch("./scss/**/*.scss", style);
    gulp.watch("./*.php").on("change", browserSync.reload);
    gulp.watch("./components/**/*.php").on("change", browserSync.reload);
    gulp.watch("./templates/**/*.php").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

export { style, watch };
