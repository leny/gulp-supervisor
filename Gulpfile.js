var gulp = require( "gulp" ),
    jshint = require( "gulp-jshint" ),
    coffee = require( "gulp-coffee" ),
    supervisor = require( "./index.js" );

gulp.task( "compile", function () {
    gulp.src( "./index.coffee" )
        .pipe( coffee( { bare: true } ) )
        .pipe( jshint() )
        .pipe( gulp.dest( "./" ) );
} );

gulp.task( "supervisor-simple", function() {
    supervisor( {
        script: "test/fixture/server.js"
    } );
} );

gulp.task( "supervisor-all", function() {
    supervisor( {
        script: "test/fixture/server.js",
        args: [],
        watch: [ "test" ],
        ignore: [ "tasks" ],
        pollInterval: 500,
        extensions: [ "js" ],
        exec: "node",
        debug: true,
        debugBrk: false,
        harmony: true,
        noRestartOn: false,
        forceWatch: true,
        quiet: false
    } );
} );
