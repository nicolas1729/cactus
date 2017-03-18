<<<<<<< HEAD
define([
=======
define( [
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	"./core",
	"./core/init",
	"./manipulation", // clone
	"./traversing" // parent, contents
], function( jQuery ) {

<<<<<<< HEAD
jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {
=======
"use strict";

jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}
>>>>>>> 533092147c410637b99bf57166ee237aec486555

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

<<<<<<< HEAD
			wrap.map(function() {
=======
			wrap.map( function() {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
<<<<<<< HEAD
			}).append( this );
=======
			} ).append( this );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
<<<<<<< HEAD
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
=======
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
<<<<<<< HEAD
		});
=======
		} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

<<<<<<< HEAD
		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});

return jQuery;
});
=======
		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );

return jQuery;
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
