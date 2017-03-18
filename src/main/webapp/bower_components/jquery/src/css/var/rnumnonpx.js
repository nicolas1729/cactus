<<<<<<< HEAD
define([
	"../../var/pnum"
], function( pnum ) {
	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
});
=======
define( [
	"../../var/pnum"
], function( pnum ) {
	"use strict";

	return new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
