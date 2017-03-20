<<<<<<< HEAD
define([
=======
define( [
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	"../core",
	"../core/parseHTML",
	"../ajax",
	"../traversing",
	"../manipulation",
<<<<<<< HEAD
	"../selector",
	// Optional event/alias dependency
	"../event/alias"
], function( jQuery ) {

// Keep a copy of the old load method
var _load = jQuery.fn.load;
=======
	"../selector"
], function( jQuery ) {

"use strict";
>>>>>>> 533092147c410637b99bf57166ee237aec486555

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
<<<<<<< HEAD
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
=======
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
<<<<<<< HEAD
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {
=======
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {
>>>>>>> 533092147c410637b99bf57166ee237aec486555

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
<<<<<<< HEAD
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
=======
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
>>>>>>> 533092147c410637b99bf57166ee237aec486555

				// Otherwise use the full result
				responseText );

<<<<<<< HEAD
		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
=======
		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	}

	return this;
};

<<<<<<< HEAD
});
=======
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
