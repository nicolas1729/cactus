<<<<<<< HEAD
define([
	"../core",
	"../ajax"
], function( jQuery ) {

// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
=======
define( [
	"../core",
	"../var/document",
	"../ajax"
], function( jQuery, document ) {

"use strict";

// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
<<<<<<< HEAD
});
=======
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
<<<<<<< HEAD
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
=======
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

>>>>>>> 533092147c410637b99bf57166ee237aec486555
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
<<<<<<< HEAD
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
=======
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
>>>>>>> 533092147c410637b99bf57166ee237aec486555
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
<<<<<<< HEAD
=======

				// Use native DOM manipulation to avoid our domManip AJAX trickery
>>>>>>> 533092147c410637b99bf57166ee237aec486555
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
<<<<<<< HEAD
});

});
=======
} );

} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
