# gulp-supervisor

![NPM version](http://img.shields.io/npm/v/gulp-supervisor.svg) ![Dependency Status](https://david-dm.org/leny/gulp-supervisor.svg) ![Downloads counter](http://img.shields.io/npm/dm/gulp-supervisor.svg) [![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

> Run [supervisor](https://github.com/isaacs/node-supervisor) as a gulp task for easy configuration and integration with the rest of your workflow.

* * *

*This Gulp task is freely inspired from the [gulp-nodemon](https://github.com/JacksonGariety/gulp-nodemon) by [Jackson Gariety](https://github.com/JacksonGariety).*

## Usage

### **`supervisor( script[, options] )`**

You need to pass to supervisor the path of the **script** to monitor, and can pass an **object** with supervisor options, like this :

```js
{
  args: [ "dev" ],
  watch: [ "bin" ],
  ignore: [ "test" ],
  pollInterval: 500,
  extensions: [ "js,jade" ],
  exec: "node",
  debug: true,
  debugBrk: true,
  harmony: true
  noRestartOn: "exit",
  forceWatch: true,
  quiet: true
}
```

#### Options

The following options corresponds to the available options from [supervisor](https://github.com/isaacs/node-supervisor). If you don't pass these options to the grunt tasks, the default values of supervisor will be used. 

##### args
Type: `Array` of `Strings`  
List of arguments to be passed to your script.

##### watch
Type: `Array` of `Strings`  
List of folders or js files to watch for changes.  

##### ignore
Type: `Array` of `Strings`  
List of folders to ignore for changes.  

##### pollInterval
Type: `Number` of **milliseconds**  
How often to poll watched files for changes.

##### extensions
Type: `Array` of `Strings`  
List of file extensions to watch for changes.

##### exec
Type: `String`  
The executable that runs the specified script.

##### debug
Type: `Boolean`  
Starts node with `--debug` flag.

##### debugBrk
Type: `Boolean`  
Starts node with `--debug-brk` flag.

##### harmony
Type: `Boolean`  
Starts node with `--harmony` flag.

##### noRestartOn
Type: `String`, `"error"` or `"exit"`  
Don't automatically restart the supervised program if it ends.  
Supervisor will wait for a change in the source files.  
If "error", an exit code of 0 will still restart.  
If "exit", no restart regardless of exit code.

##### forceWatch
Type: `Boolean`  
Use fs.watch instead of fs.watchFile.  
This may be useful if you see a high cpu load on a windows machine.

##### quiet
Type: `Boolean`  
Suppress DEBUG messages

## Example

```js
// Gulpfile.js
var gulp = require( "gulp" ),
    supervisor = require( "gulp-supervisor" );

gulp.task( "supervisor-simple", function() {
    supervisor( "test/fixture/server.js" );
} );

gulp.task( "supervisor-all", function() {
    supervisor( "test/fixture/server.js", {
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
```

## Release History

* **0.1.0**: Initial release (*28/02/14*)

## TODO

Write tests :)

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
