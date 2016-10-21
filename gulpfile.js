
//=============================================
//               DEPENDENCIES
//=============================================

var del = require('del'),
	gulp = require('gulp'),
	babel = require('gulp-babel'),
	bower = require('gulp-bower'),
	nodemon = require('gulp-nodemon'),
	sass = require('gulp-sass'),
	shell = require('gulp-shell'),
	karmaServer = require('karma').Server;


//=============================================
//            DECLARE PATHS
//=============================================

var paths = {
	/**
	 * The 'gulpfile' file is where our run tasks are hold.
	 */
	gulpfile:   'gulpfile.js',
	/**
	 * This is a collection of file patterns that refer to our app code (the
	 * stuff in `public/`). These file paths are used in the configuration of
	 * build tasks.
	 *
	 * - 'styles'       contains all project css styles
	 * - 'images'       contains all project images
	 * - 'fonts'        contains all project fonts
	 * - 'scripts'      contains all project javascript except unit test files
	 * - 'html'         contains main html files
	 * - 'templates'    contains all project html templates
	 */
	app: {
		basePath:       'public/',
		fonts:          ['public/**/*.{eot,svg,ttf,woff}', 'jspm_packages/**/*.{eot,svg,ttf,woff}'],
		styles:         ['public/styles/**/*.scss','public/modules/**/*.scss'],
		images:         ['public/**/*.{png,gif,jpg,jpeg}'],
		scripts:        ['public/app.js','public/modules/**/*.js'],
		html:           ['public/index.html'],
		templates:      ['templates/*.html', 'public/*.html']
	},
	/**
	 * The 'tmp' folder is where our html templates are compiled to JavaScript during
	 * the build process and then they are concatenating with all other js files and
	 * copy to 'dist' folder.
	 */
	tmp: {
		basePath:       '.tmp/',
		styles:         '.tmp/styles/',
		scripts:        '.tmp/scripts/'
	},
	/**
	 * The 'dist' folder is where our app and its documentation
	 * resides once they're completely built.
	 *
	 * - 'app'         application distribution source code
	 * - 'docs'         application documentation
	 */
	build: {
		dist:           'dist/',
		docs:           'docs/'
	}
};

//=============================================
//             TASKS
//=============================================

gulp.task('watch:scripts', function(){
	gulp.watch(paths.app.scripts, ['lint', 'docs']);
});

gulp.task('watch:styles', function(){
	gulp.watch(paths.app.styles, ['sass']);
});

gulp.task('sass', function(cb){
	return gulp.src(paths.app.styles)
		.pipe(sass({
		  includePaths: ['./public/bower_components/',  './public/modules/*/bower_components/']
		}).on('error', sass.logError))
		.pipe(gulp.dest(paths.app.basePath + 'styles'));
});

gulp.task('lint', function () {
  return gulp.src(['app.js', 'public/main.js', 'public/modules/**/*.js'])
	.pipe(eslint({
	  configFile: '.eslintrc.json',
	}))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});

// See https://github.com/karma-runner/gulp-karma
/*gulp.task('test', function (cb) {
	var karma = new karmaServer({
	  configFile: __dirname + '/karma.conf.js',
	  singleRun: true
	});
	karma.start();
}); */



// Server for convenience. You can accomplish the same thing by
// typing 'nodemon' (assuming you have it installed globally)
gulp.task('server', function () {
  return nodemon({
	script: 'app.js',
	ext: 'js',
	ignore: ['dist/'],
	watch: ['app.js', 'public/'],
	tasks: ['lint']
  });
});

//Vulcanize polymer
/*gulp.task('vulcanize', function () {
	return gulp.src('public/elements.html')
		.pipe(vulcanize({
			inlineScripts: true,
			inlineCss: true,
			stripComments: true
		}))
		.pipe(gulp.dest('./dist/public'));
});*/




//=============================================
//             PUBLIC TASKS
//=============================================

// Create a distribution:
// 1) Run unit tests and create dist/coverage/
// 2) Compile any Sass to CSS (if it hasn't already been done)
// 3) Create a documentation website at /dist/docs/
// 4) Create a distribution version of the application
// 4) Add a bundled dependency file to the distribution version of the application
gulp.task('dist', function(){
  runSequence('clean:dist','sass');
});

// Start a web server, load the app at public/, watch scripts and styles
// for updates. Use this to on the app itself.
gulp.task('default', ['sass', 'server', 'watch:scripts', 'watch:styles']);
