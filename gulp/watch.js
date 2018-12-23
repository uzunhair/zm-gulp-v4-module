var path = require('./path/path.js');
module.exports = function () {
    $.gulp.task('watch', function() {
        $.gulp.watch(path.path.watch.pug, {usePolling: true}, $.gulp.parallel('pug:build'));
        $.gulp.watch(path.path.watch.style, {usePolling: true}, $.gulp.parallel('style:build', 'styleDev:build'));
        $.gulp.watch(path.path.src.js, {usePolling: true}, $.gulp.parallel('js:build'));
        $.gulp.watch(path.path.src.img, {usePolling: true}, $.gulp.parallel('img:build'));
        $.gulp.watch(path.path.src.imgComp, {usePolling: true}, $.gulp.parallel('img:build'));
        $.gulp.watch(path.path.src.pngIcons, $.gulp.parallel('spriteImg:build'));
        $.gulp.watch(path.path.src.svgIcons, $.gulp.parallel('spriteSvg:build'));
    });
};