<<<<<<< HEAD
define([
=======
define( [
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	"../core",
	"../selector"
], function( jQuery ) {

<<<<<<< HEAD
jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};

});
=======
"use strict";

jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};

} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
