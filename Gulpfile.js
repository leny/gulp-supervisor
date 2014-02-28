var gulp = require( "gulp" ),
    jshint = require( "gulp-jshint" ),
    coffee = require( "gulp-coffee" );

gulp.task( "compile", function () {
    gulp.src( "./index.coffee" )
        .pipe( coffee( { bare: true } ) )
        .pipe( jshint() )
        .pipe( gulp.dest( "./index.js" ) );
} );
