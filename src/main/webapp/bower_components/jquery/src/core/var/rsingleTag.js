<<<<<<< HEAD
define(function() {
	// Match a standalone tag
	return (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
});
=======
define( function() {
	"use strict";

	// Match a standalone tag
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
