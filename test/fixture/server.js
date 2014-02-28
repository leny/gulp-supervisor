/*
 * grunt-supervisor - test
 * https://github.com/leny/grunt-supervisor
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */

var express = require( "express" ),
    app = express();

app.get( "/", function( req, res ) {
  res.send( "hey, world, listen !" );
} );

app.listen( 54321 );
console.log( "Listening on port 54321." );
