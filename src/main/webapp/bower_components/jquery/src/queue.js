<<<<<<< HEAD
define([
	"./core",
	"./data/var/data_priv",
	"./deferred",
	"./callbacks"
], function( jQuery, data_priv ) {

jQuery.extend({
=======
define( [
	"./core",
	"./data/var/dataPriv",
	"./deferred",
	"./callbacks"
], function( jQuery, dataPriv ) {

"use strict";

jQuery.extend( {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
<<<<<<< HEAD
			queue = data_priv.get( elem, type );
=======
			queue = dataPriv.get( elem, type );
>>>>>>> 533092147c410637b99bf57166ee237aec486555

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
<<<<<<< HEAD
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
=======
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
<<<<<<< HEAD
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
=======
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
<<<<<<< HEAD
			return jQuery.queue( this[0], type );
=======
			return jQuery.queue( this[ 0 ], type );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
		}

		return data === undefined ?
			this :
<<<<<<< HEAD
			this.each(function() {
=======
			this.each( function() {
>>>>>>> 533092147c410637b99bf57166ee237aec486555
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

<<<<<<< HEAD
				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
=======
				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
<<<<<<< HEAD
=======

>>>>>>> 533092147c410637b99bf57166ee237aec486555
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
<<<<<<< HEAD
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
=======
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
<<<<<<< HEAD
});

return jQuery;
});
=======
} );

return jQuery;
} );
>>>>>>> 533092147c410637b99bf57166ee237aec486555
