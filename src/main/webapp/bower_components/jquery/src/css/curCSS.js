<<<<<<< HEAD
define([
=======
define( [
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	"../core",
	"./var/rnumnonpx",
	"./var/rmargin",
	"./var/getStyles",
<<<<<<< HEAD
	"../selector" // contains
], function( jQuery, rnumnonpx, rmargin, getStyles ) {
=======
	"./support",
	"../selector" // Get jQuery.contains
], function( jQuery, rnumnonpx, rmargin, getStyles, support ) {

"use strict";
>>>>>>> 533092147c410637b99bf57166ee237aec486555

function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

<<<<<<< HEAD
	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {
=======
	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
>>>>>>> 533092147c410637b99bf57166ee237aec486555

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

<<<<<<< HEAD
		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
=======
		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
>>>>>>> 533092147c410637b99bf57166ee237aec486555

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
<<<<<<< HEAD
		// Support: IE
=======

		// Support: IE <=9 - 11 only
>>>>>>> 533092147c410637b99bf57166ee237aec486555
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}

return curCSS;
<<<<<<< HEAD
});
=======
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
