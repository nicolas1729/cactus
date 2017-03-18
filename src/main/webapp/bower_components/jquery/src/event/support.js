<<<<<<< HEAD
define([
	"../var/support"
], function( support ) {

support.focusinBubbles = "onfocusin" in window;

return support;

});
=======
define( [
	"../var/support"
], function( support ) {

"use strict";

support.focusin = "onfocusin" in window;

return support;

} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
