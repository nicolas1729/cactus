<<<<<<< HEAD
define([
=======
define( [
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	"../core",
	"../var/indexOf",
	"./var/rneedsContext",
	"../selector"
], function( jQuery, indexOf, rneedsContext ) {

<<<<<<< HEAD
=======
"use strict";

>>>>>>> 533092147c410637b99bf57166ee237aec486555
var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
<<<<<<< HEAD
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});
=======
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
<<<<<<< HEAD
		});
=======
		} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
<<<<<<< HEAD
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
=======
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
<<<<<<< HEAD
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
=======
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
<<<<<<< HEAD
			}) );
		}

=======
			} ) );
		}

		ret = this.pushStack( [] );

>>>>>>> 533092147c410637b99bf57166ee237aec486555
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

<<<<<<< HEAD
		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
=======
		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
<<<<<<< HEAD
});

});
=======
} );

} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
