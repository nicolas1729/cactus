<<<<<<< HEAD
define([
	"../core"
], function( jQuery ) {

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
=======
define( [
	"../core"
], function( jQuery ) {

"use strict";

// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	if ( !data || typeof data !== "string" ) {
		return null;
	}

<<<<<<< HEAD
	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
=======
	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};

return jQuery.parseXML;

<<<<<<< HEAD
});
=======
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
