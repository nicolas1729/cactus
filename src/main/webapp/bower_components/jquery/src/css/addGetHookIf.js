<<<<<<< HEAD
define(function() {

function addGetHookIf( conditionFn, hookFn ) {
=======
define( function() {

"use strict";

function addGetHookIf( conditionFn, hookFn ) {

>>>>>>> 533092147c410637b99bf57166ee237aec486555
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
<<<<<<< HEAD
=======

>>>>>>> 533092147c410637b99bf57166ee237aec486555
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
<<<<<<< HEAD
			return (this.get = hookFn).apply( this, arguments );
=======
			return ( this.get = hookFn ).apply( this, arguments );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
		}
	};
}

return addGetHookIf;

<<<<<<< HEAD
});
=======
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
