<<<<<<< HEAD
define([
	"../core"
], function( jQuery ) {

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
=======
define( [
	"../core"
], function( jQuery ) {

"use strict";

// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
<<<<<<< HEAD
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
=======
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
<<<<<<< HEAD
=======

>>>>>>> 533092147c410637b99bf57166ee237aec486555
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
<<<<<<< HEAD
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
=======
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
>>>>>>> 533092147c410637b99bf57166ee237aec486555
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
<<<<<<< HEAD
			len ? fn( elems[0], key ) : emptyGet;
=======
			len ? fn( elems[ 0 ], key ) : emptyGet;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
};

return access;

<<<<<<< HEAD
});
=======
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
