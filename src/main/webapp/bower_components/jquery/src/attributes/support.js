<<<<<<< HEAD
define([
	"../var/support"
], function( support ) {

(function() {
=======
define( [
	"../var/document",
	"../var/support"
], function( document, support ) {

"use strict";

( function() {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

<<<<<<< HEAD
	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
=======
	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
<<<<<<< HEAD
})();

return support;

});
=======
} )();

return support;

} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
