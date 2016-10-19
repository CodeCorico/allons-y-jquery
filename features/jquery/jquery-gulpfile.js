'use strict';

module.exports = function($gulp) {
  $gulp.task('jquery', function(done) {
    $gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery/dist/jquery.min.map'
    ])
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'jquery';
};
